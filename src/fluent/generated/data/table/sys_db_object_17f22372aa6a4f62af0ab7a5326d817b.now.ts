import {
    Table,
    StringColumn,
    DateColumn,
    ReferenceColumn,
    MultiLineTextColumn,
    BooleanColumn,
    DecimalColumn,
} from '@servicenow/sdk/core'

export const x_973795_om_tele_0_prod_offer = Table({
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
        prefix: 'PO',
    },
    display: 'name',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'product_spec',
        },
    ],
    label: 'Product Offering',
    name: 'x_973795_om_tele_0_prod_offer',
    schema: {
        number: StringColumn({
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
        start_date: DateColumn({
            maxLength: 40,
        }),
        end_date: DateColumn({
            maxLength: 40,
        }),
        currency: StringColumn({
            default: 'usd',
            choices: {
                usd: {
                    label: 'USD',
                    sequence: 1,
                },
                eur: {
                    label: 'EUR',
                    sequence: 2,
                },
                gbp: {
                    label: 'GBP',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
        product_spec: ReferenceColumn({
            label: 'Product Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_spec',
        }),
        description: MultiLineTextColumn({
            maxLength: 4000,
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        price: DecimalColumn({
            maxLength: 20,
        }),
    },
})
