var OrderAmendHandler = Class.create()
OrderAmendHandler.prototype = {
    initialize: function () {
        this.logger = new OrderLogger()
    },

    createAmendOrder: function (originalOrderId, modifications) {
        var originalOrder = new GlideRecord('x_973795_om_tele_0_order')
        if (!originalOrder.get(originalOrderId)) {
            gs.error('OrderAmendHandler: Original order not found: ' + originalOrderId)
            return null
        }

        // Create the amend order
        var newOrder = new GlideRecord('x_973795_om_tele_0_order')
        newOrder.initialize()
        newOrder.setValue('customer', originalOrder.getValue('customer'))
        newOrder.setValue('order_type', 'amend')
        newOrder.setValue('original_order', originalOrderId)
        newOrder.setValue('state', 'draft')
        newOrder.setValue('description', 'Amendment of order ' + originalOrder.getValue('number'))

        if (modifications && modifications.description) {
            newOrder.setValue('description', modifications.description)
        }
        if (modifications && modifications.requested_date) {
            newOrder.setValue('requested_date', modifications.requested_date)
        }

        var newOrderId = newOrder.insert()

        if (!newOrderId) {
            gs.error('OrderAmendHandler: Failed to create amend order')
            return null
        }

        // Copy product order lines from original order
        var originalLines = new GlideRecord('x_973795_om_tele_0_order_line')
        originalLines.addQuery('order', originalOrderId)
        originalLines.addQuery('line_type', 'product')
        originalLines.query()

        while (originalLines.next()) {
            var newLine = new GlideRecord('x_973795_om_tele_0_order_line')
            newLine.initialize()
            newLine.setValue('order', newOrderId)
            newLine.setValue('line_type', 'product')
            newLine.setValue('product_spec', originalLines.getValue('product_spec'))
            newLine.setValue('prod_offering', originalLines.getValue('prod_offering'))
            newLine.setValue('quantity', originalLines.getValue('quantity'))

            // Determine action based on modifications
            var lineSpecId = originalLines.getValue('product_spec')
            var action = 'no_change'

            if (modifications && modifications.modifiedSpecs && Array.isArray(modifications.modifiedSpecs)) {
                for (var i = 0; i < modifications.modifiedSpecs.length; i++) {
                    if (modifications.modifiedSpecs[i] === lineSpecId) {
                        action = 'modify'
                        break
                    }
                }
            }

            newLine.setValue('action', action)
            newLine.setValue('state', 'pending')
            newLine.setValue('fulfillment_state', 'not_started')
            newLine.insert()
        }

        // Trigger decomposition
        var decomposer = new OrderDecomposition()
        decomposer.decompose(newOrderId)

        this.logger.log({
            orderId: newOrderId,
            level: 'info',
            message: 'Amend order created from original order ' + originalOrder.getValue('number'),
            source: 'OrderAmendHandler',
        })

        return newOrderId
    },

    type: 'OrderAmendHandler',
}
