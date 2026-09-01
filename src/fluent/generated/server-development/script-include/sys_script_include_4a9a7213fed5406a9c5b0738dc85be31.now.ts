import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['4a9a7213fed5406a9c5b0738dc85be31'],
    name: 'OrderStateManager',
    script: Now.include('./sys_script_include_4a9a7213fed5406a9c5b0738dc85be31.server.js'),
    description:
        'Manages order state transitions by deriving order state from the aggregate state of its child order lines.',
    apiName: 'x_973795_om_tele_0.OrderStateManager',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
