import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['5263b2715a3348a58c83f9fdd00d23c5'],
    name: 'OrderDecomposition',
    script: Now.include('./sys_script_include_5263b2715a3348a58c83f9fdd00d23c5.server.js'),
    description:
        'Core decomposition engine that breaks down product order lines into service and resource order lines based on catalog specifications.',
    apiName: 'x_973795_om_tele_0.OrderDecomposition',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
