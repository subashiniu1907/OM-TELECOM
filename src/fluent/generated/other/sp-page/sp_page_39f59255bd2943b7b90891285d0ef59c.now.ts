import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Orders',
    category: 'custom',
    pageId: 'omt_orders',
    containers: [
        {
            $id: '8de87f4fecbb432585bbedfa535fe11b',
            order: 1,
            name: 'Orders Container',
            rows: [
                {
                    $id: 'c86c100a23df42ca8040c51bed884e4f',
                    order: 1,
                    columns: [
                        {
                            $id: 'e83033c479644892b0c81c11fc76ced3',
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: '177e228c89cd4b5c8ed1756e1f27120e',
                                    widget: 'a5758349f443466b829975d355c3afbc',
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
