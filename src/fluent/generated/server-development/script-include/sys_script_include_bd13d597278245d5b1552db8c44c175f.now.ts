import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['bd13d597278245d5b1552db8c44c175f'],
    name: 'OrderAmendHandler',
    script: Now.include('./sys_script_include_bd13d597278245d5b1552db8c44c175f.server.js'),
    description:
        'Handles amend/modify orders by creating a new order referencing the original, copying lines, and triggering decomposition.',
    apiName: 'x_973795_om_tele_0.OrderAmendHandler',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
