import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['b6855df9af61498db8652f5fcdbb0777'],
    name: 'OrderDecomposition',
    script: Now.include('./sys_script_include_b6855df9af61498db8652f5fcdbb0777.server.js'),
    description:
        'Core decomposition engine that breaks down product order lines into service and resource order lines based on catalog specifications.',
    apiName: 'x_973795_om_tele_0.OrderDecomposition',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
