import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['5f165b89acfa4c59b2623d0d02fdcb64'],
    name: 'OMT Dashboard',
    clientScript: Now.include('./sp_widget_omt_dashboard/client_script.js'),
    serverScript: Now.include('./sp_widget_omt_dashboard/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_omt_dashboard/template.html'),
    customCss: Now.include('./sp_widget_omt_dashboard/style.scss'),
    description: 'Dashboard widget for OM Telecom order management portal',
    id: 'omt_dashboard',
    linkScript: Now.include('./sp_widget_omt_dashboard/link-script.js'),
})
