import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['899be25113e44a0ca7fd5792503c2604'],
    name: 'OrderValidator',
    script: Now.include('./sys_script_include_899be25113e44a0ca7fd5792503c2604.server.js'),
    description:
        'Validates orders before processing. Checks customer, product specs, mandatory characteristics, and order integrity.',
    apiName: 'x_973795_om_tele_0.OrderValidator',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
