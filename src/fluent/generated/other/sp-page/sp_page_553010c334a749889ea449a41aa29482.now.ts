import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Order Detail',
    category: 'custom',
    pageId: 'omt_order_detail',
    containers: [
        {
            $id: 'bdf66dd9267d4092a8b50605caf2ec20',
            order: 1,
            name: 'Order Detail Container',
            rows: [
                {
                    $id: '8d8b164ae541441c811f47e658460ac9',
                    order: 1,
                    columns: [
                        {
                            $id: '88d51e63625943f7b989d3b875fdfcd7',
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: '6b55e848647d4ec8804fd767a720e3b4',
                                    widget: '76a244f7865444c78e54549f1788072e',
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
