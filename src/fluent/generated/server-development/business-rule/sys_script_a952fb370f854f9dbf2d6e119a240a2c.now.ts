import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['a952fb370f854f9dbf2d6e119a240a2c'],
    name: 'Set Order Defaults',
    table: 'x_973795_om_tele_0_order',
    order: 10,
    when: 'before',
    action: ['insert'],
    description: 'Sets default values on new orders. Sets state to draft if not already set.',
    script: Now.include('./sys_script_a952fb370f854f9dbf2d6e119a240a2c.server.js'),
})
