import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['f7d3723bc5df49228a82fc01abebc3d0'],
    name: 'OrderLogger',
    script: Now.include('./sys_script_include_f7d3723bc5df49228a82fc01abebc3d0.server.js'),
    description: 'Centralized logging utility for the OM Telecom application. Creates records in the order_log table.',
    apiName: 'x_973795_om_tele_0.OrderLogger',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
