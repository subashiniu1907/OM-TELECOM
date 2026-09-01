import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['7a5a0426919f4b43b2747dc4abe759a2'],
    name: 'Cancel Order Cascade',
    table: 'x_973795_om_tele_0_order',
    order: 200,
    when: 'after',
    action: ['update'],
    filterCondition: 'stateVALCHANGES^state=cancelled',
    description:
        'Triggers when order state changes to cancelled. Cascades cancellation to all non-completed order lines.',
    script: Now.include('./sys_script_7a5a0426919f4b43b2747dc4abe759a2.server.js'),
})
