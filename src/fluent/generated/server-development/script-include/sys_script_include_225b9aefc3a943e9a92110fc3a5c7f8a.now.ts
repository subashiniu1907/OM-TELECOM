import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['225b9aefc3a943e9a92110fc3a5c7f8a'],
    name: 'OrderStateManager',
    script: Now.include('./sys_script_include_225b9aefc3a943e9a92110fc3a5c7f8a.server.js'),
    description:
        'Manages order state transitions by deriving order state from the aggregate state of its child order lines.',
    apiName: 'x_973795_om_tele_0.OrderStateManager',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
