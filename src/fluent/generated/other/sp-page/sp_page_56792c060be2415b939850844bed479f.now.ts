import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Products',
    category: 'custom',
    pageId: 'omt_catalog',
    containers: [
        {
            $id: 'aef07373ea654287954fac8381bd5fa7',
            order: 1,
            name: 'Catalog Container',
            rows: [
                {
                    $id: '8c675d7ca94441718db03e99668f266a',
                    order: 1,
                    columns: [
                        {
                            $id: '789c97e540d7432e88295d7433947421',
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: '83f87bdfa24a49c2b490c4ca6bfce3d6',
                                    widget: '69132fc6d5a7412ea2eb194f73fe1b35',
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
