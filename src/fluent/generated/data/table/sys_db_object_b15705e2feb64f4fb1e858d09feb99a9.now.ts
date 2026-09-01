import { Table, StringColumn, BooleanColumn, EmailColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_customer = Table({
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
        prefix: 'CUST',
    },
    display: 'name',
    label: 'Customer',
    name: 'x_973795_om_tele_0_customer',
    schema: {
        address: StringColumn({
            maxLength: 500,
        }),
        city: StringColumn({
            maxLength: 100,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        customer_type: StringColumn({
            default: 'individual',
            choices: {
                individual: {
                    label: 'Individual',
                    sequence: 1,
                },
                business: {
                    label: 'Business',
                    sequence: 2,
                },
            },
            maxLength: 40,
        }),
        country: StringColumn({
            maxLength: 100,
        }),
        phone: StringColumn({
            maxLength: 20,
        }),
        email: EmailColumn({
            maxLength: 255,
        }),
        state: StringColumn({
            maxLength: 100,
        }),
        number: StringColumn({
            maxLength: 40,
        }),
    },
})
