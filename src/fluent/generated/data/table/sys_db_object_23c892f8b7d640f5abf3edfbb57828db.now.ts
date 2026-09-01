import { Table, ReferenceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_char_val = Table({
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
            element: 'characteristic',
        },
        {
            name: 'index2',
            unique: false,
            element: 'order_line',
        },
    ],
    label: 'Characteristic Value',
    name: 'x_973795_om_tele_0_char_val',
    schema: {
        order_line: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_order_line',
        }),
        value: StringColumn({
            maxLength: 500,
        }),
        old_value: StringColumn({
            maxLength: 500,
        }),
        characteristic: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_char',
        }),
    },
})
