var OrderLogger = Class.create()
OrderLogger.prototype = {
    initialize: function () {},

    log: function (params) {
        var gr = new GlideRecord('x_973795_om_tele_0_order_log')
        gr.initialize()

        if (params.orderId) {
            gr.setValue('order', params.orderId)
        }
        if (params.orderLineId) {
            gr.setValue('order_line', params.orderLineId)
        }
        if (params.level) {
            gr.setValue('log_level', params.level)
        } else {
            gr.setValue('log_level', 'info')
        }
        if (params.message) {
            gr.setValue('message', params.message)
        }
        if (params.source) {
            gr.setValue('source', params.source)
        }
        if (params.externalRef) {
            gr.setValue('external_ref', params.externalRef)
        }
        if (params.payload) {
            gr.setValue('payload', typeof params.payload === 'string' ? params.payload : JSON.stringify(params.payload))
        }
        if (params.response) {
            gr.setValue('response', typeof params.response === 'string' ? params.response : JSON.stringify(params.response))
        }

        gr.insert()
    },

    type: 'OrderLogger',
}
