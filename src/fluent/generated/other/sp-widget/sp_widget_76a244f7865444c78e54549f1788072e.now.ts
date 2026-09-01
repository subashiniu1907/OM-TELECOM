import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['76a244f7865444c78e54549f1788072e'],
    name: 'OMT Order Detail',
    clientScript: Now.include('./sp_widget_omt_order_detail/client_script.js'),
    serverScript: Now.include('./sp_widget_omt_order_detail/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_omt_order_detail/template.html'),
    customCss: Now.include('./sp_widget_omt_order_detail/style.scss'),
    description: 'Order detail with hierarchy tree view',
    id: 'omt_order_detail',
    linkScript: Now.include('./sp_widget_omt_order_detail/link-script.js'),
})
