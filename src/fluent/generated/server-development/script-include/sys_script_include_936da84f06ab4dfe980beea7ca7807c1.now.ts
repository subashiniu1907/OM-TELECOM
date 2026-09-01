import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['936da84f06ab4dfe980beea7ca7807c1'],
    name: 'OrderAmendHandler',
    script: Now.include('./sys_script_include_936da84f06ab4dfe980beea7ca7807c1.server.js'),
    description:
        'Handles amend/modify orders by creating a new order referencing the original, copying lines, and triggering decomposition.',
    apiName: 'x_973795_om_tele_0.OrderAmendHandler',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
