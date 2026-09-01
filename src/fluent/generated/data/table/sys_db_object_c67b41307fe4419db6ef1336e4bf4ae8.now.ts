import {
    Table,
    StringColumn,
    IntegerColumn,
    DateTimeColumn,
    ReferenceColumn,
    BooleanColumn,
    MultiLineTextColumn,
} from '@servicenow/sdk/core'

export const x_973795_om_tele_0_order_line = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'OL',
    },
    display: 'number',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'order',
        },
        {
            name: 'index2',
            unique: false,
            element: 'parent_line',
        },
        {
            name: 'index3',
            unique: false,
            element: 'prod_offering',
        },
        {
            name: 'index4',
            unique: false,
            element: 'product_spec',
        },
        {
            name: 'index5',
            unique: false,
            element: 'resource_spec',
        },
        {
            name: 'index6',
            unique: false,
            element: 'service_spec',
        },
    ],
    label: 'Order Line',
    name: 'x_973795_om_tele_0_order_line',
    schema: {
        state: StringColumn({
            default: 'pending',
            choices: {
                pending: {
                    label: 'Pending',
                    sequence: 1,
                },
                in_progress: {
                    label: 'In Progress',
                    sequence: 2,
                },
                completed: {
                    label: 'Completed',
                    sequence: 3,
                },
                failed: {
                    label: 'Failed',
                    sequence: 4,
                },
                cancelled: {
                    label: 'Cancelled',
                    sequence: 5,
                },
            },
            maxLength: 40,
        }),
        fulfillment_seq: IntegerColumn({
            default: '0',
            label: 'Fulfillment Sequence',
            maxLength: 40,
        }),
        fulfillment_end: DateTimeColumn({
            maxLength: 40,
        }),
        quantity: IntegerColumn({
            default: '1',
            maxLength: 40,
        }),
        resource_spec: ReferenceColumn({
            label: 'Resource Specification',
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_res_spec',
        }),
        service_spec: ReferenceColumn({
            label: 'Service Specification',
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_svc_spec',
        }),
        product_spec: ReferenceColumn({
            label: 'Product Specification',
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_spec',
        }),
        fulfillment_start: DateTimeColumn({
            maxLength: 40,
        }),
        parent_line: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order_line',
        }),
        retry_count: IntegerColumn({
            default: '0',
            maxLength: 40,
        }),
        fulfillment_state: StringColumn({
            default: 'not_started',
            choices: {
                not_started: {
                    label: 'Not Started',
                    sequence: 1,
                },
                in_progress: {
                    label: 'In Progress',
                    sequence: 2,
                },
                completed: {
                    label: 'Completed',
                    sequence: 3,
                },
                failed: {
                    label: 'Failed',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        external_ref: StringColumn({
            label: 'External Reference',
            maxLength: 200,
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        order: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order',
        }),
        error_message: MultiLineTextColumn({
            maxLength: 4000,
        }),
        number: StringColumn({
            maxLength: 40,
        }),
        line_type: StringColumn({
            choices: {
                product: {
                    label: 'Product',
                    sequence: 1,
                },
                service: {
                    label: 'Service',
                    sequence: 2,
                },
                resource: {
                    label: 'Resource',
                    sequence: 3,
                },
            },
            mandatory: true,
            maxLength: 40,
        }),
        action: StringColumn({
            default: 'add',
            choices: {
                add: {
                    label: 'Add',
                    sequence: 1,
                },
                modify: {
                    label: 'Modify',
                    sequence: 2,
                },
                delete: {
                    label: 'Delete',
                    sequence: 3,
                },
                no_change: {
                    label: 'No Change',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        prod_offering: ReferenceColumn({
            label: 'Product Offering',
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_offer',
        }),
    },
})
