import {
    Table,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    IntegerColumn,
    MultiLineTextColumn,
} from '@servicenow/sdk/core'

export const x_973795_om_tele_0_prod_char = Table({
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
    display: 'name',
    index: [
        {
            name: 'index',
            unique: false,
            element: 'product_spec',
        },
    ],
    label: 'Product Characteristic',
    name: 'x_973795_om_tele_0_prod_char',
    schema: {
        name: StringColumn({
            mandatory: true,
            maxLength: 100,
        }),
        product_spec: ReferenceColumn({
            label: 'Product Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_spec',
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        sequence: IntegerColumn({
            default: '0',
            maxLength: 40,
        }),
        mandatory: BooleanColumn({
            default: false,
            maxLength: 40,
        }),
        char_type: StringColumn({
            choices: {
                string: {
                    label: 'String',
                    sequence: 1,
                },
                number: {
                    label: 'Number',
                    sequence: 2,
                },
                boolean: {
                    label: 'Boolean',
                    sequence: 3,
                },
                choice: {
                    label: 'Choice',
                    sequence: 4,
                },
            },
            label: 'Characteristic Type',
            maxLength: 40,
        }),
        default_value: StringColumn({
            maxLength: 200,
        }),
        description: MultiLineTextColumn({
            maxLength: 1000,
        }),
    },
})
