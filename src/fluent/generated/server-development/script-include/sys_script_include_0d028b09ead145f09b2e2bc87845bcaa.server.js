var FulfillmentEngine = Class.create()
FulfillmentEngine.prototype = {
    initialize: function () {
        this.logger = new OrderLogger()
    },

    startFulfillment: function (orderId) {
        this.logger.log({
            orderId: orderId,
            level: 'info',
            message: 'Starting fulfillment for order',
            source: 'FulfillmentEngine',
        })

        // Process service lines first
        var serviceLines = new GlideRecord('x_973795_om_tele_0_order_line')
        serviceLines.addQuery('order', orderId)
        serviceLines.addQuery('line_type', 'service')
        serviceLines.orderBy('fulfillment_seq')
        serviceLines.query()

        while (serviceLines.next()) {
            var parentLineId = serviceLines.getValue('parent_line')

            // Check if parent product line is not failed
            if (parentLineId) {
                var parentLine = new GlideRecord('x_973795_om_tele_0_order_line')
                if (parentLine.get(parentLineId) && parentLine.getValue('state') === 'failed') {
                    serviceLines.setValue('state', 'failed')
                    serviceLines.setValue('error_message', 'Parent product line has failed')
                    serviceLines.update()
                    continue
                }
            }

            serviceLines.setValue('fulfillment_state', 'in_progress')
            serviceLines.setValue('fulfillment_start', new GlideDateTime().getDisplayValue())
            serviceLines.setValue('state', 'in_progress')
            serviceLines.update()

            // Simulate fulfillment completion
            serviceLines.setValue('fulfillment_state', 'completed')
            serviceLines.setValue('fulfillment_end', new GlideDateTime().getDisplayValue())
            serviceLines.setValue('state', 'completed')
            serviceLines.update()
        }

        // Process resource lines (depend on parent service lines)
        var resourceLines = new GlideRecord('x_973795_om_tele_0_order_line')
        resourceLines.addQuery('order', orderId)
        resourceLines.addQuery('line_type', 'resource')
        resourceLines.orderBy('fulfillment_seq')
        resourceLines.query()

        while (resourceLines.next()) {
            var svcParentId = resourceLines.getValue('parent_line')

            // Check parent service line dependency
            if (svcParentId) {
                var svcParent = new GlideRecord('x_973795_om_tele_0_order_line')
                if (svcParent.get(svcParentId)) {
                    if (svcParent.getValue('fulfillment_state') !== 'completed') {
                        // Parent not complete, skip for retry
                        continue
                    }
                }
            }

            resourceLines.setValue('fulfillment_state', 'in_progress')
            resourceLines.setValue('fulfillment_start', new GlideDateTime().getDisplayValue())
            resourceLines.setValue('state', 'in_progress')
            resourceLines.update()

            // Simulate fulfillment completion
            resourceLines.setValue('fulfillment_state', 'completed')
            resourceLines.setValue('fulfillment_end', new GlideDateTime().getDisplayValue())
            resourceLines.setValue('state', 'completed')
            resourceLines.update()
        }

        this.logger.log({
            orderId: orderId,
            level: 'info',
            message: 'Fulfillment processing complete',
            source: 'FulfillmentEngine',
        })
    },

    fulfillOrderLine: function (orderLineId) {
        var line = new GlideRecord('x_973795_om_tele_0_order_line')
        if (!line.get(orderLineId)) {
            gs.error('FulfillmentEngine: Order line not found: ' + orderLineId)
            return
        }

        if (!this.checkDependencies(orderLineId)) {
            this.logger.log({
                orderId: line.getValue('order'),
                orderLineId: orderLineId,
                level: 'warning',
                message: 'Dependencies not met for order line fulfillment',
                source: 'FulfillmentEngine',
            })
            return
        }

        line.setValue('fulfillment_state', 'in_progress')
        line.setValue('fulfillment_start', new GlideDateTime().getDisplayValue())
        line.setValue('state', 'in_progress')
        line.update()

        // Simulate fulfillment
        line.setValue('fulfillment_state', 'completed')
        line.setValue('fulfillment_end', new GlideDateTime().getDisplayValue())
        line.setValue('state', 'completed')
        line.update()
    },

    checkDependencies: function (orderLineId) {
        var line = new GlideRecord('x_973795_om_tele_0_order_line')
        if (!line.get(orderLineId)) {
            return false
        }

        var parentLineId = line.getValue('parent_line')
        if (!parentLineId) {
            return true
        }

        var parentLine = new GlideRecord('x_973795_om_tele_0_order_line')
        if (!parentLine.get(parentLineId)) {
            return false
        }

        var parentState = parentLine.getValue('fulfillment_state')
        if (parentState === 'failed') {
            return false
        }

        var lineType = line.getValue('line_type')
        if (lineType === 'resource' && parentState !== 'completed') {
            return false
        }

        return true
    },

    retryFulfillment: function (orderLineId) {
        var line = new GlideRecord('x_973795_om_tele_0_order_line')
        if (!line.get(orderLineId)) {
            gs.error('FulfillmentEngine: Order line not found for retry: ' + orderLineId)
            return
        }

        var retryCount = parseInt(line.getValue('retry_count') || '0', 10)
        line.setValue('retry_count', retryCount + 1)
        line.setValue('fulfillment_state', 'not_started')
        line.setValue('state', 'pending')
        line.setValue('error_message', '')
        line.update()

        this.logger.log({
            orderId: line.getValue('order'),
            orderLineId: orderLineId,
            level: 'info',
            message: 'Retrying fulfillment, attempt: ' + (retryCount + 1),
            source: 'FulfillmentEngine',
        })

        this.fulfillOrderLine(orderLineId)
    },

    type: 'FulfillmentEngine',
}
