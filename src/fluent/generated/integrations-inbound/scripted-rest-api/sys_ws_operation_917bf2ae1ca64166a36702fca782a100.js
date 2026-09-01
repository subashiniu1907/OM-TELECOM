(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    try {
        var body = request.body ? request.body.data : null;
        if (!body) {
            response.setStatus(400);
            response.setBody({
                error: {
                    message: 'Request body is required',
                    details: ['Missing JSON payload']
                }
            });
            return;
        }

        var errors = [];

        if (!body.customer) {
            errors.push('customer is required');
        }
        if (!body.orderType) {
            errors.push('orderType is required');
        }
        if (!body.orderItems || !Array.isArray(body.orderItems) || body.orderItems.length === 0) {
            errors.push('orderItems array is required and must not be empty');
        }

        if (errors.length > 0) {
            response.setStatus(400);
            response.setBody({ error: { message: 'Validation failed', details: errors } });
            return;
        }

        // Validate customer exists
        var custGr = new GlideRecord('x_973795_om_tele_0_customer');
        custGr.addQuery('number', body.customer);
        custGr.query();
        if (!custGr.next()) {
            response.setStatus(400);
            response.setBody({
                error: {
                    message: 'Customer not found',
                    details: ['No customer with number: ' + body.customer]
                }
            });
            return;
        }
        var customerSysId = custGr.getUniqueValue();

        // Validate product offerings exist and are active
        var offeringMap = {};
        for (var i = 0; i < body.orderItems.length; i++) {
            var item = body.orderItems[i];
            if (!item.product) {
                errors.push('orderItems[' + i + '].product is required');
                continue;
            }
            if (!item.action) {
                errors.push('orderItems[' + i + '].action is required');
                continue;
            }
            var offerGr = new GlideRecord('x_973795_om_tele_0_prod_offer');
            offerGr.addQuery('name', item.product);
            offerGr.addQuery('status', 'active');
            offerGr.query();
            if (!offerGr.next()) {
                errors.push('Product offering not found or inactive: ' + item.product);
            } else {
                offeringMap[item.product] = offerGr.getUniqueValue();
            }
        }

        if (errors.length > 0) {
            response.setStatus(400);
            response.setBody({ error: { message: 'Validation failed', details: errors } });
            return;
        }

        // Create order record
        var orderGr = new GlideRecord('x_973795_om_tele_0_order');
        orderGr.initialize();
        orderGr.setValue('customer', customerSysId);
        orderGr.setValue('order_type', body.orderType);
        orderGr.setValue('state', 'draft');
        if (body.externalOrderId) {
            orderGr.setValue('external_order_id', body.externalOrderId);
        }
        if (body.description) {
            orderGr.setValue('description', body.description);
        }
        if (body.requestedDate) {
            orderGr.setValue('requested_date', body.requestedDate);
        }
        var orderSysId = orderGr.insert();

        if (!orderSysId) {
            response.setStatus(500);
            response.setBody({ error: { message: 'Failed to create order', details: [] } });
            return;
        }

        // Create order lines for each item
        var orderLines = [];
        for (var j = 0; j < body.orderItems.length; j++) {
            var orderItem = body.orderItems[j];
            var lineGr = new GlideRecord('x_973795_om_tele_0_order_line');
            lineGr.initialize();
            lineGr.setValue('order', orderSysId);
            lineGr.setValue('line_type', 'product');
            lineGr.setValue('action', orderItem.action);
            lineGr.setValue('prod_offering', offeringMap[orderItem.product]);
            lineGr.setValue('quantity', orderItem.quantity || 1);
            lineGr.setValue('state', 'pending');
            var lineSysId = lineGr.insert();

            // Create characteristic values if present
            if (orderItem.characteristics && lineSysId) {
                var chars = orderItem.characteristics;
                for (var charName in chars) {
                    if (chars.hasOwnProperty(charName)) {
                        var charGr = new GlideRecord('x_973795_om_tele_0_prod_char');
                        charGr.addQuery('name', charName);
                        charGr.query();
                        if (charGr.next()) {
                            var charValGr = new GlideRecord('x_973795_om_tele_0_char_val');
                            charValGr.initialize();
                            charValGr.setValue('order_line', lineSysId);
                            charValGr.setValue('characteristic', charGr.getUniqueValue());
                            charValGr.setValue('value', chars[charName]);
                            charValGr.insert();
                        }
                    }
                }
            }

            // Read back line number
            if (lineSysId) {
                var readLineGr = new GlideRecord('x_973795_om_tele_0_order_line');
                if (readLineGr.get(lineSysId)) {
                    orderLines.push({
                        lineNumber: readLineGr.getValue('number') || '',
                        product: orderItem.product,
                        action: orderItem.action
                    });
                }
            }
        }

        // Update order state to submitted (triggers decomposition business rule)
        var updateGr = new GlideRecord('x_973795_om_tele_0_order');
        if (updateGr.get(orderSysId)) {
            updateGr.setValue('state', 'submitted');
            updateGr.update();
        }

        // Read back order number
        var resultGr = new GlideRecord('x_973795_om_tele_0_order');
        resultGr.get(orderSysId);

        response.setStatus(201);
        response.setBody({
            result: {
                orderId: orderSysId,
                orderNumber: resultGr.getValue('number') || '',
                state: 'submitted',
                orderLines: orderLines
            }
        });
    } catch (e) {
        gs.error('REST API createOrder error: ' + e.message);
        response.setStatus(500);
        response.setBody({
            error: { message: 'Internal server error', details: [e.message] }
        });
    }
})(request, response);
