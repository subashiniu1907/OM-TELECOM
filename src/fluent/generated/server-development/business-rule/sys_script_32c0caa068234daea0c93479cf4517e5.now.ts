import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['32c0caa068234daea0c93479cf4517e5'],
    name: 'Order Validation Rule',
    table: 'x_973795_om_tele_0_order',
    order: 50,
    when: 'before',
    action: ['update', 'insert'],
    description:
        'Basic field validation. Ensures customer is set for non-draft orders and original_order is set for amend orders.',
    script: Now.include('./sys_script_32c0caa068234daea0c93479cf4517e5.server.js'),
})
