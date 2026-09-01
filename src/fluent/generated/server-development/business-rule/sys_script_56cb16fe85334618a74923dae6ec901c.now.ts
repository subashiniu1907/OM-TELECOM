import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['56cb16fe85334618a74923dae6ec901c'],
    name: 'Order Validation Rule',
    table: 'x_973795_om_tele_0_order',
    order: 50,
    when: 'before',
    action: ['update', 'insert'],
    description:
        'Basic field validation. Ensures customer is set for non-draft orders and original_order is set for amend orders.',
    script: Now.include('./sys_script_56cb16fe85334618a74923dae6ec901c.server.js'),
})
