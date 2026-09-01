import {
    Table,
    DateTimeColumn,
    StringColumn,
    MultiLineTextColumn,
    BooleanColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_973795_om_tele_0_order = Table({
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
        prefix: 'ORD',
    },
    display: 'number',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'customer',
        },
        {
            name: 'index2',
            unique: false,
            element: 'original_order',
        },
    ],
    label: 'Telecom Order',
    name: 'x_973795_om_tele_0_order',
    schema: {
        requested_date: DateTimeColumn({
            label: 'Requested Completion Date',
            maxLength: 40,
        }),
        completed_date: DateTimeColumn({
            maxLength: 40,
        }),
        correlation_id: StringColumn({
            maxLength: 100,
        }),
        order_type: StringColumn({
            default: 'new',
            choices: {
                new: {
                    label: 'New',
                    sequence: 1,
                },
                modify: {
                    label: 'Modify',
                    sequence: 2,
                },
                amend: {
                    label: 'Amend',
                    sequence: 3,
                },
                suspend: {
                    label: 'Suspend',
                    sequence: 4,
                },
                resume: {
                    label: 'Resume',
                    sequence: 5,
                },
                disconnect: {
                    label: 'Disconnect',
                    sequence: 6,
                },
                cancel: {
                    label: 'Cancel',
                    sequence: 7,
                },
            },
            maxLength: 40,
        }),
        external_order_id: StringColumn({
            maxLength: 100,
        }),
        description: MultiLineTextColumn({
            maxLength: 4000,
        }),
        number: StringColumn({
            maxLength: 40,
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        customer: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_customer',
        }),
        state: StringColumn({
            default: 'draft',
            choices: {
                draft: {
                    label: 'Draft',
                    sequence: 1,
                },
                submitted: {
                    label: 'Submitted',
                    sequence: 2,
                },
                validating: {
                    label: 'Validating',
                    sequence: 3,
                },
                decomposing: {
                    label: 'Decomposing',
                    sequence: 4,
                },
                in_fulfillment: {
                    label: 'In Fulfillment',
                    sequence: 5,
                },
                completed: {
                    label: 'Completed',
                    sequence: 6,
                },
                failed: {
                    label: 'Failed',
                    sequence: 7,
                },
                cancelled: {
                    label: 'Cancelled',
                    sequence: 8,
                },
            },
            maxLength: 40,
        }),
        original_order: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order',
        }),
    },
})
