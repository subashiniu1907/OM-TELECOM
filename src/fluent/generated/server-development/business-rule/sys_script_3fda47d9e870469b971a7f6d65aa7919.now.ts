import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['3fda47d9e870469b971a7f6d65aa7919'],
    name: 'Order Submission Handler',
    table: 'x_973795_om_tele_0_order',
    when: 'after',
    action: ['update', 'insert'],
    filterCondition: 'stateVALCHANGES^state=submitted',
    description: 'Triggers when order state changes to submitted. Validates, decomposes, and starts fulfillment.',
    script: Now.include('./sys_script_3fda47d9e870469b971a7f6d65aa7919.server.js'),
})
