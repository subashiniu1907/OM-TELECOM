import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['a5758349f443466b829975d355c3afbc'],
    name: 'OMT Order List',
    clientScript: Now.include('./sp_widget_omt_order_list/client_script.js'),
    serverScript: Now.include('./sp_widget_omt_order_list/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_omt_order_list/template.html'),
    customCss: Now.include('./sp_widget_omt_order_list/style.scss'),
    description: 'Full order list with filtering, pagination, and navigation',
    id: 'omt_order_list',
    linkScript: Now.include('./sp_widget_omt_order_list/link-script.js'),
})
