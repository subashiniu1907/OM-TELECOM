import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['69132fc6d5a7412ea2eb194f73fe1b35'],
    name: 'OMT Product Catalog',
    clientScript: Now.include('./sp_widget_omt_product_catalog/client_script.js'),
    serverScript: Now.include('./sp_widget_omt_product_catalog/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_omt_product_catalog/template.html'),
    customCss: Now.include('./sp_widget_omt_product_catalog/style.scss'),
    description: 'Browse available product offerings',
    id: 'omt_product_catalog',
    linkScript: Now.include('./sp_widget_omt_product_catalog/link-script.js'),
})
