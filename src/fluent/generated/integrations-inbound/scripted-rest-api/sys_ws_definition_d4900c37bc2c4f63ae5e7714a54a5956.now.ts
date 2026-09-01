import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['d4900c37bc2c4f63ae5e7714a54a5956'],
    name: 'Telecom Order API',
    consumes: 'application/json',
    produces: 'application/json',
    serviceId: 'order',
    shortDescription: 'REST API for managing telecom orders',
    routes: [
        {
            $id: Now.ID['0ad7a64b96884afa909c1021e5aa9d03'],
            name: 'List Orders',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_0ad7a64b96884afa909c1021e5aa9d03.js'),
            produces: 'application/json',
            path: '/orders',
            shortDescription: 'List orders with optional filters',
            parameters: [
                {
                    $id: Now.ID['a7a0cc72986a47399bc70573997970f1'],
                    name: 'customer',
                    shortDescription: 'Filter by customer number',
                },
                {
                    $id: Now.ID['5c6714f6fd1d4eb2974814e61faa80b0'],
                    name: 'limit',
                    exampleValue: '50',
                    shortDescription: 'Maximum number of results (default 50, max 500)',
                },
                {
                    $id: Now.ID['0d02f135f1254c5393c8636032c812ea'],
                    name: 'state',
                    shortDescription: 'Filter by order state',
                },
            ],
        },
        {
            $id: Now.ID['917bf2ae1ca64166a36702fca782a100'],
            name: 'Create Order',
            consumes: 'application/json',
            method: 'POST',
            script: Now.include('./sys_ws_operation_917bf2ae1ca64166a36702fca782a100.js'),
            produces: 'application/json',
            path: '/orders',
            shortDescription: 'Create a new telecom order with order items',
        },
        {
            $id: Now.ID['b55edb3093914384bdc33aa7b24c9abc'],
            name: 'Get Order',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_b55edb3093914384bdc33aa7b24c9abc.js'),
            produces: 'application/json',
            path: '/orders/{id}',
            shortDescription: 'Get order details by sys_id or order number',
            parameters: [
                {
                    $id: Now.ID['3b556359db274ae2902cec5cc51b7383'],
                    name: 'id',
                    required: true,
                    shortDescription: 'Order sys_id or order number',
                },
            ],
        },
    ],
})
