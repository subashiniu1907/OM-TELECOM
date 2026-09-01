import { Table, StringColumn, DateColumn, BooleanColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_prod_spec = Table({
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
        prefix: 'PS',
    },
    display: 'name',
    label: 'Product Specification',
    name: 'x_973795_om_tele_0_prod_spec',
    schema: {
        product_type: StringColumn({
            choices: {
                broadband: {
                    label: 'Broadband',
                    sequence: 1,
                },
                mobile: {
                    label: 'Mobile',
                    sequence: 2,
                },
                vpn: {
                    label: 'VPN',
                    sequence: 3,
                },
                voice: {
                    label: 'Voice',
                    sequence: 4,
                },
                data: {
                    label: 'Data',
                    sequence: 5,
                },
            },
            maxLength: 40,
        }),
        version: StringColumn({
            maxLength: 20,
        }),
        effective_to: DateColumn({
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
        number: StringColumn({
            maxLength: 40,
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        effective_from: DateColumn({
            maxLength: 40,
        }),
        status: StringColumn({
            default: 'draft',
            choices: {
                draft: {
                    label: 'Draft',
                    sequence: 1,
                },
                active: {
                    label: 'Active',
                    sequence: 2,
                },
                retired: {
                    label: 'Retired',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        description: MultiLineTextColumn({
            maxLength: 4000,
        }),
    },
})
