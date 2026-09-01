import { Table, ReferenceColumn, StringColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_order_log = Table({
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'order',
        },
        {
            name: 'index2',
            unique: false,
            element: 'order_line',
        },
    ],
    label: 'Order Log',
    name: 'x_973795_om_tele_0_order_log',
    schema: {
        order: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order',
        }),
        log_level: StringColumn({
            default: 'info',
            choices: {
                info: {
                    label: 'Info',
                    sequence: 1,
                },
                warning: {
                    label: 'Warning',
                    sequence: 2,
                },
                error: {
                    label: 'Error',
                    sequence: 3,
                },
                debug: {
                    label: 'Debug',
                    sequence: 4,
                },
            },
            maxLength: 40,
        }),
        payload: MultiLineTextColumn({
            maxLength: 8000,
        }),
        order_line: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order_line',
        }),
        message: MultiLineTextColumn({
            mandatory: true,
            maxLength: 4000,
        }),
        response: MultiLineTextColumn({
            maxLength: 8000,
        }),
        source: StringColumn({
            maxLength: 100,
        }),
        external_ref: StringColumn({
            label: 'External Reference',
            maxLength: 200,
        }),
    },
})
