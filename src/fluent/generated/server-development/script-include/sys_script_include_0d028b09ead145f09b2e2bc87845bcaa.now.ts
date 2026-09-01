import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['0d028b09ead145f09b2e2bc87845bcaa'],
    name: 'FulfillmentEngine',
    script: Now.include('./sys_script_include_0d028b09ead145f09b2e2bc87845bcaa.server.js'),
    description:
        'Handles order fulfillment workflow with dependency checking between service and resource order lines.',
    apiName: 'x_973795_om_tele_0.FulfillmentEngine',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
