import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['bba8192dc5694a65b385d28b06f024fc'],
    name: 'OrderLogger',
    script: Now.include('./sys_script_include_bba8192dc5694a65b385d28b06f024fc.server.js'),
    description: 'Centralized logging utility for the OM Telecom application. Creates records in the order_log table.',
    apiName: 'x_973795_om_tele_0.OrderLogger',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
