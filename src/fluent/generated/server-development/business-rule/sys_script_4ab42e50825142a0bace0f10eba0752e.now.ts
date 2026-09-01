import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['4ab42e50825142a0bace0f10eba0752e'],
    name: 'Order Submission Handler',
    table: 'x_973795_om_tele_0_order',
    when: 'after',
    action: ['update', 'insert'],
    filterCondition: 'stateVALCHANGES^state=submitted',
    description: 'Triggers when order state changes to submitted. Validates, decomposes, and starts fulfillment.',
    script: Now.include('./sys_script_4ab42e50825142a0bace0f10eba0752e.server.js'),
})
