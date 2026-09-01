var OrderStateManager = Class.create()
OrderStateManager.prototype = {
    initialize: function () {
        this.logger = new OrderLogger()
    },

    updateOrderState: function (orderId) {
        var orderGr = new GlideRecord('x_973795_om_tele_0_order')
        if (!orderGr.get(orderId)) {
            gs.error('OrderStateManager: Order not found: ' + orderId)
            return
        }

        var currentState = orderGr.getValue('state')

        var lines = new GlideRecord('x_973795_om_tele_0_order_line')
        lines.addQuery('order', orderId)
        lines.query()

        if (!lines.hasNext()) {
            return
        }

        var totalLines = 0
        var completedCount = 0
        var failedCount = 0
        var inProgressCount = 0
        var cancelledCount = 0
        var hasMandatoryFailed = false

        while (lines.next()) {
            totalLines++
            var lineState = lines.getValue('state')
            var lineType = lines.getValue('line_type')

            if (lineState === 'completed') {
                completedCount++
            } else if (lineState === 'failed') {
                failedCount++
                // Product and service lines are considered mandatory
                if (lineType === 'product' || lineType === 'service') {
                    hasMandatoryFailed = true
                }
            } else if (lineState === 'in_progress') {
                inProgressCount++
            } else if (lineState === 'cancelled') {
                cancelledCount++
            }
        }

        var newState = currentState

        if (totalLines > 0 && completedCount === totalLines) {
            newState = 'completed'
            orderGr.setValue('completed_date', new GlideDateTime().getDisplayValue())
        } else if (hasMandatoryFailed) {
            newState = 'failed'
        } else if (totalLines > 0 && cancelledCount === totalLines) {
            newState = 'cancelled'
        } else if (inProgressCount > 0) {
            newState = 'in_fulfillment'
        }

        if (newState !== currentState) {
            orderGr.setValue('state', newState)
            orderGr.update()

            this.logger.log({
                orderId: orderId,
                level: 'info',
                message: 'Order state changed from ' + currentState + ' to ' + newState +
                    ' (completed: ' + completedCount + ', failed: ' + failedCount +
                    ', in_progress: ' + inProgressCount + ', cancelled: ' + cancelledCount +
                    ', total: ' + totalLines + ')',
                source: 'OrderStateManager',
            })
        }
    },

    type: 'OrderStateManager',
}
