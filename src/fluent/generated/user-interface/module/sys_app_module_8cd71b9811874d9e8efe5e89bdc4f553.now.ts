import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8cd71b9811874d9e8efe5e89bdc4f553'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: 'd22d69e32f8a4c8a8ecd466dd7cac497',
        filter: 'state!=completed^state!=cancelled',
        link_type: 'LIST',
        name: 'x_973795_om_tele_0_order',
        order: 300,
        override_menu_roles: false,
        require_confirmation: false,
        sys_domain: 'global',
        sys_domain_path: '/',
        title: 'My Orders',
        uncancelable: false,
    },
})
