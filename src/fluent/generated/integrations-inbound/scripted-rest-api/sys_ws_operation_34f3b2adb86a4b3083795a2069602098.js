(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    try {
        var pathId = '';
        if (request.pathParams && request.pathParams.id) {
            pathId = request.pathParams.id;
        }

        if (!pathId) {
            response.setStatus(400);
            response.setBody({ error: { message: 'Order ID or number is required' } });
            return;
        }

        // Try to find order by sys_id first, then by number
        var orderGr = new GlideRecord('x_973795_om_tele_0_order');
        var found = orderGr.get(pathId);
        if (!found) {
            orderGr = new GlideRecord('x_973795_om_tele_0_order');
            orderGr.addQuery('number', pathId);
            orderGr.query();
            if (!orderGr.next()) {
                response.setStatus(404);
                response.setBody({ error: { message: 'Order not found: ' + pathId } });
                return;
            }
        }

        var orderSysId = orderGr.getUniqueValue();

        var order = {
            sys_id: orderSysId,
            number: orderGr.getValue('number') || '',
            customer: orderGr.getDisplayValue('customer') || '',
            customer_id: orderGr.getValue('customer') || '',
            order_type: orderGr.getValue('order_type') || '',
            state: orderGr.getValue('state') || '',
            description: orderGr.getValue('description') || '',
            external_order_id: orderGr.getValue('external_order_id') || '',
            requested_date: orderGr.getValue('requested_date') || '',
            completed_date: orderGr.getValue('completed_date') || '',
            sys_created_on: orderGr.getValue('sys_created_on') || '',
            sys_updated_on: orderGr.getValue('sys_updated_on') || ''
        };

        // Get all order lines
        var lineGr = new GlideRecord('x_973795_om_tele_0_order_line');
        lineGr.addQuery('order', orderSysId);
        lineGr.orderBy('number');
        lineGr.query();

        var lineMap = {};
        var rootLines = [];
        var lineIds = [];

        while (lineGr.next()) {
            var lineId = lineGr.getUniqueValue();
            var lineObj = {
                sys_id: lineId,
                number: lineGr.getValue('number') || '',
                line_type: lineGr.getValue('line_type') || '',
                action: lineGr.getValue('action') || '',
                state: lineGr.getValue('state') || '',
                quantity: lineGr.getValue('quantity') || '',
                prod_offering: lineGr.getDisplayValue('prod_offering') || '',
                product_spec: lineGr.getDisplayValue('product_spec') || '',
                service_spec: lineGr.getDisplayValue('service_spec') || '',
                resource_spec: lineGr.getDisplayValue('resource_spec') || '',
                fulfillment_state: lineGr.getValue('fulfillment_state') || '',
                parent_line: lineGr.getValue('parent_line') || '',
                children: []
            };
            lineMap[lineId] = lineObj;
            lineIds.push(lineId);
        }

        // Build hierarchy
        for (var i = 0; i < lineIds.length; i++) {
            var line = lineMap[lineIds[i]];
            if (line.parent_line && lineMap[line.parent_line]) {
                lineMap[line.parent_line].children.push(line);
            } else {
                rootLines.push(line);
            }
        }

        // Clean up parent_line from output
        for (var j = 0; j < lineIds.length; j++) {
            delete lineMap[lineIds[j]].parent_line;
        }

        response.setStatus(200);
        response.setBody({
            result: {
                order: order,
                orderLines: rootLines
            }
        });
    } catch (e) {
        gs.error('REST API getOrder error: ' + e.message);
        response.setStatus(500);
        response.setBody({
            error: { message: 'Internal server error', details: [e.message] }
        });
    }
})(request, response);
