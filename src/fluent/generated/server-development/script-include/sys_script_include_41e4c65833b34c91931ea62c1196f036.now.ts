import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['41e4c65833b34c91931ea62c1196f036'],
    name: 'FulfillmentManagerTest',
    script: Now.include('./sys_script_include_41e4c65833b34c91931ea62c1196f036.server.js'),
    description:
        'Handles order fulfillment workflow with dependency checking between service and resource order lines.',
    apiName: 'x_973795_om_tele_0.FulfillmentEngine',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
