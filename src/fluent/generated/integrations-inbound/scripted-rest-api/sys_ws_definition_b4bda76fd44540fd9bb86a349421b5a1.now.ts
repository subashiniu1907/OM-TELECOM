import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['b4bda76fd44540fd9bb86a349421b5a1'],
    name: 'Telecom Order API',
    consumes: 'application/json',
    produces: 'application/json',
    serviceId: 'order',
    shortDescription: 'REST API for managing telecom orders',
    routes: [
        {
            $id: Now.ID['05be89bad4ad4e4ab583f763e6bce1be'],
            name: 'Create Order',
            consumes: 'application/json',
            method: 'POST',
            script: Now.include('./sys_ws_operation_05be89bad4ad4e4ab583f763e6bce1be.js'),
            produces: 'application/json',
            path: '/orders',
            shortDescription: 'Create a new telecom order with order items',
        },
        {
            $id: Now.ID['34f3b2adb86a4b3083795a2069602098'],
            name: 'Get Order',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_34f3b2adb86a4b3083795a2069602098.js'),
            produces: 'application/json',
            path: '/orders/{id}',
            shortDescription: 'Get order details by sys_id or order number',
            parameters: [
                {
                    $id: Now.ID['b3a912b8c7fb4c44807d013a37c5dcea'],
                    name: 'id',
                    required: true,
                    shortDescription: 'Order sys_id or order number',
                },
            ],
        },
        {
            $id: Now.ID['5f7bcd1f82954b679834d844d3361f44'],
            name: 'List Orders',
            consumes: 'application/json',
            script: Now.include('./sys_ws_operation_5f7bcd1f82954b679834d844d3361f44.js'),
            produces: 'application/json',
            path: '/orders',
            shortDescription: 'List orders with optional filters',
            parameters: [
                {
                    $id: Now.ID['56de6972a44344ef9f0a4d8dcbc1ac79'],
                    name: 'limit',
                    exampleValue: '50',
                    shortDescription: 'Maximum number of results (default 50, max 500)',
                },
                {
                    $id: Now.ID['6ffa93227f384578807eecd74719eb98'],
                    name: 'state',
                    shortDescription: 'Filter by order state',
                },
                {
                    $id: Now.ID['7f963f690490434bb3150e777d7c1459'],
                    name: 'customer',
                    shortDescription: 'Filter by customer number',
                },
            ],
        },
    ],
})
