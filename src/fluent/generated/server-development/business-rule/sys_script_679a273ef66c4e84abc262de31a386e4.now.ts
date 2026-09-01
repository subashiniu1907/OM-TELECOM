import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['679a273ef66c4e84abc262de31a386e4'],
    name: 'Set Order Defaults',
    table: 'x_973795_om_tele_0_order',
    order: 10,
    when: 'before',
    action: ['insert'],
    description: 'Sets default values on new orders. Sets state to draft if not already set.',
    script: Now.include('./sys_script_679a273ef66c4e84abc262de31a386e4.server.js'),
})
