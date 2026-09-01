import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['a7d9213d03f14f8fabb74a296ca60d30'],
    name: 'Cancel Order Cascade',
    table: 'x_973795_om_tele_0_order',
    order: 200,
    when: 'after',
    action: ['update'],
    filterCondition: 'stateVALCHANGES^state=cancelled',
    description:
        'Triggers when order state changes to cancelled. Cascades cancellation to all non-completed order lines.',
    script: Now.include('./sys_script_a7d9213d03f14f8fabb74a296ca60d30.server.js'),
})
