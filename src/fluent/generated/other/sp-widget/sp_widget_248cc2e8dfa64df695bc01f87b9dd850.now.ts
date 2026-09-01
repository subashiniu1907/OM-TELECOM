import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['248cc2e8dfa64df695bc01f87b9dd850'],
    name: 'OMT New Order',
    clientScript: Now.include('./sp_widget_omt_new_order/client_script.js'),
    serverScript: Now.include('./sp_widget_omt_new_order/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_omt_new_order/template.html'),
    customCss: Now.include('./sp_widget_omt_new_order/style.scss'),
    description: 'Order creation form for OM Telecom portal',
    id: 'omt_new_order',
    linkScript: Now.include('./sp_widget_omt_new_order/link-script.js'),
})
