import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['ef275f69a09a486c864b6b5f8fc930ef'],
    name: 'Order Line State Rollup',
    table: 'x_973795_om_tele_0_order_line',
    when: 'after',
    action: ['update'],
    filterCondition: 'stateVALCHANGES^ORfulfillment_stateVALCHANGES',
    description:
        'Triggers when order line state or fulfillment_state changes. Rolls up child line states to the parent order.',
    script: Now.include('./sys_script_ef275f69a09a486c864b6b5f8fc930ef.server.js'),
})
