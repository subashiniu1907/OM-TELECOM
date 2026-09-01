var OrderDecomposition = Class.create()
OrderDecomposition.prototype = {
    initialize: function () {
        this.logger = new OrderLogger()
    },

    decompose: function (orderId) {
        var orderGr = new GlideRecord('x_973795_om_tele_0_order')
        if (!orderGr.get(orderId)) {
            gs.error('OrderDecomposition: Order not found: ' + orderId)
            return
        }

        var productLines = new GlideRecord('x_973795_om_tele_0_order_line')
        productLines.addQuery('order', orderId)
        productLines.addQuery('line_type', 'product')
        productLines.query()

        var totalServiceLines = 0
        var totalResourceLines = 0

        while (productLines.next()) {
            var productSpecId = productLines.getValue('product_spec')
            var productLineId = productLines.getUniqueValue()
            var parentAction = productLines.getValue('action')

            if (!productSpecId) {
                this.logger.log({
                    orderId: orderId,
                    orderLineId: productLineId,
                    level: 'warning',
                    message: 'Product order line has no product_spec set, skipping decomposition',
                    source: 'OrderDecomposition',
                })
                continue
            }

            // Find all service specs linked to this product spec
            var prodSvcGr = new GlideRecord('x_973795_om_tele_0_prod_svc')
            prodSvcGr.addQuery('product_spec', productSpecId)
            prodSvcGr.orderBy('sequence')
            prodSvcGr.query()

            while (prodSvcGr.next()) {
                var serviceSpecId = prodSvcGr.getValue('service_spec')

                // Create service order line
                var svcLine = new GlideRecord('x_973795_om_tele_0_order_line')
                svcLine.initialize()
                svcLine.setValue('order', orderId)
                svcLine.setValue('line_type', 'service')
                svcLine.setValue('service_spec', serviceSpecId)
                svcLine.setValue('parent_line', productLineId)
                svcLine.setValue('action', parentAction || 'add')
                svcLine.setValue('state', 'pending')
                svcLine.setValue('fulfillment_state', 'not_started')
                var svcLineId = svcLine.insert()
                totalServiceLines++

                // Find all resource specs linked to this service spec
                var svcResGr = new GlideRecord('x_973795_om_tele_0_svc_res')
                svcResGr.addQuery('service_spec', serviceSpecId)
                svcResGr.orderBy('sequence')
                svcResGr.query()

                while (svcResGr.next()) {
                    var resourceSpecId = svcResGr.getValue('resource_spec')

                    // Create resource order line
                    var resLine = new GlideRecord('x_973795_om_tele_0_order_line')
                    resLine.initialize()
                    resLine.setValue('order', orderId)
                    resLine.setValue('line_type', 'resource')
                    resLine.setValue('resource_spec', resourceSpecId)
                    resLine.setValue('parent_line', svcLineId)
                    resLine.setValue('action', parentAction || 'add')
                    resLine.setValue('state', 'pending')
                    resLine.setValue('fulfillment_state', 'not_started')
                    resLine.insert()
                    totalResourceLines++
                }
            }
        }

        this.logger.log({
            orderId: orderId,
            level: 'info',
            message: 'Decomposition complete. Service lines: ' + totalServiceLines + ', Resource lines: ' + totalResourceLines,
            source: 'OrderDecomposition',
        })
    },

    type: 'OrderDecomposition',
}
