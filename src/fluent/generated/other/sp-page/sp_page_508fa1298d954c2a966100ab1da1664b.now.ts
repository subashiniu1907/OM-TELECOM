import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'New Order',
    category: 'custom',
    pageId: 'omt_new_order',
    containers: [
        {
            $id: 'e114307114f24899875d0a87a3abe83c',
            order: 1,
            name: 'New Order Container',
            rows: [
                {
                    $id: '5f070bbc17af4c5a84009e05339ea262',
                    order: 1,
                    columns: [
                        {
                            $id: 'e787581e07b14f3591ad3546d4e006b4',
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: '6a3cb46c4b7a4e2392db46b4975d2784',
                                    widget: '248cc2e8dfa64df695bc01f87b9dd850',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
