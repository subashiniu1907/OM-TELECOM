import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['d607a7a1367e4a979f6703b5fb1ed11a'],
    name: 'Order Line State Rollup',
    table: 'x_973795_om_tele_0_order_line',
    when: 'after',
    action: ['update'],
    filterCondition: 'stateVALCHANGES^ORfulfillment_stateVALCHANGES',
    description:
        'Triggers when order line state or fulfillment_state changes. Rolls up child line states to the parent order.',
    script: Now.include('./sys_script_d607a7a1367e4a979f6703b5fb1ed11a.server.js'),
})
