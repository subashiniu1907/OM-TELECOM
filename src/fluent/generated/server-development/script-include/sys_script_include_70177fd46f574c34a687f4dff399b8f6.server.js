var OrderValidator = Class.create()
OrderValidator.prototype = {
    initialize: function () {},

    validate: function (orderId) {
        var result = { valid: true, errors: [] }

        var orderGr = new GlideRecord('x_973795_om_tele_0_order')
        if (!orderGr.get(orderId)) {
            result.valid = false
            result.errors.push('Order not found: ' + orderId)
            return result
        }

        // Check customer exists and is active
        var customerId = orderGr.getValue('customer')
        if (!customerId) {
            result.valid = false
            result.errors.push('Order has no customer assigned')
        } else {
            var customerGr = new GlideRecord('x_973795_om_tele_0_customer')
            if (!customerGr.get(customerId)) {
                result.valid = false
                result.errors.push('Customer not found: ' + customerId)
            } else if (customerGr.getValue('active') !== 'true' && customerGr.getValue('active') !== '1') {
                result.valid = false
                result.errors.push('Customer is not active: ' + customerGr.getValue('name'))
            }
        }

        // Check order has at least one product order line
        var productLines = new GlideRecord('x_973795_om_tele_0_order_line')
        productLines.addQuery('order', orderId)
        productLines.addQuery('line_type', 'product')
        productLines.query()

        if (!productLines.hasNext()) {
            result.valid = false
            result.errors.push('Order must have at least one product order line')
        }

        // Validate each product order line
        while (productLines.next()) {
            var productSpecId = productLines.getValue('product_spec')
            var lineNumber = productLines.getValue('number') || productLines.getUniqueValue()

            if (!productSpecId) {
                result.valid = false
                result.errors.push('Product order line ' + lineNumber + ' has no product_spec')
                continue
            }

            var specGr = new GlideRecord('x_973795_om_tele_0_prod_spec')
            if (!specGr.get(productSpecId)) {
                result.valid = false
                result.errors.push('Product spec not found for line ' + lineNumber)
            } else if (specGr.getValue('status') !== 'active') {
                result.valid = false
                result.errors.push('Product spec "' + specGr.getValue('name') + '" is not active (status: ' + specGr.getValue('status') + ')')
            }

            // Validate quantity > 0
            var quantity = parseInt(productLines.getValue('quantity') || '0', 10)
            if (quantity <= 0) {
                result.valid = false
                result.errors.push('Product order line ' + lineNumber + ' has invalid quantity: ' + quantity)
            }
        }

        // If order_type is 'amend', verify original_order is set
        var orderType = orderGr.getValue('order_type')
        if (orderType === 'amend') {
            var originalOrder = orderGr.getValue('original_order')
            if (!originalOrder) {
                result.valid = false
                result.errors.push('Amend order must have an original_order reference')
            }
        }

        // Check all mandatory characteristics are provided
        var allLines = new GlideRecord('x_973795_om_tele_0_order_line')
        allLines.addQuery('order', orderId)
        allLines.addQuery('line_type', 'product')
        allLines.query()

        while (allLines.next()) {
            var lineProductSpec = allLines.getValue('product_spec')
            if (!lineProductSpec) {
                continue
            }

            var charGr = new GlideRecord('x_973795_om_tele_0_prod_char')
            charGr.addQuery('product_spec', lineProductSpec)
            charGr.addQuery('mandatory', true)
            charGr.query()

            while (charGr.next()) {
                var charId = charGr.getUniqueValue()
                var charName = charGr.getValue('name')

                var charValGr = new GlideRecord('x_973795_om_tele_0_char_val')
                charValGr.addQuery('order_line', allLines.getUniqueValue())
                charValGr.addQuery('characteristic', charId)
                charValGr.query()

                if (!charValGr.hasNext()) {
                    result.valid = false
                    result.errors.push('Mandatory characteristic "' + charName + '" not provided for order line ' + (allLines.getValue('number') || allLines.getUniqueValue()))
                }
            }
        }

        return result
    },

    type: 'OrderValidator',
}
