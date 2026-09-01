import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['70177fd46f574c34a687f4dff399b8f6'],
    name: 'OrderValidator',
    script: Now.include('./sys_script_include_70177fd46f574c34a687f4dff399b8f6.server.js'),
    description:
        'Validates orders before processing. Checks customer, product specs, mandatory characteristics, and order integrity.',
    apiName: 'x_973795_om_tele_0.OrderValidator',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
