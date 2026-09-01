(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    try {
        var stateParam = '';
        var customerParam = '';
        var limitParam = 50;

        if (request.queryParams) {
            if (request.queryParams.state) {
                stateParam = request.queryParams.state;
            }
            if (request.queryParams.customer) {
                customerParam = request.queryParams.customer;
            }
            if (request.queryParams.limit) {
                limitParam = parseInt(request.queryParams.limit, 10);
                if (isNaN(limitParam) || limitParam < 1) {
                    limitParam = 50;
                }
                if (limitParam > 500) {
                    limitParam = 500;
                }
            }
        }

        var orderGr = new GlideRecord('x_973795_om_tele_0_order');

        if (stateParam) {
            orderGr.addQuery('state', stateParam);
        }

        if (customerParam) {
            var custGr = new GlideRecord('x_973795_om_tele_0_customer');
            custGr.addQuery('number', customerParam);
            custGr.query();
            if (custGr.next()) {
                orderGr.addQuery('customer', custGr.getUniqueValue());
            } else {
                orderGr.addQuery('customer', customerParam);
            }
        }

        orderGr.setLimit(limitParam);
        orderGr.orderByDesc('sys_created_on');
        orderGr.query();

        var orders = [];
        while (orderGr.next()) {
            orders.push({
                sys_id: orderGr.getUniqueValue(),
                number: orderGr.getValue('number') || '',
                customer: orderGr.getDisplayValue('customer') || '',
                order_type: orderGr.getValue('order_type') || '',
                state: orderGr.getValue('state') || '',
                description: orderGr.getValue('description') || '',
                requested_date: orderGr.getValue('requested_date') || '',
                sys_created_on: orderGr.getValue('sys_created_on') || ''
            });
        }

        response.setStatus(200);
        response.setBody({
            result: {
                orders: orders,
                count: orders.length
            }
        });
    } catch (e) {
        gs.error('REST API listOrders error: ' + e.message);
        response.setStatus(500);
        response.setBody({
            error: { message: 'Internal server error', details: [e.message] }
        });
    }
})(request, response);
