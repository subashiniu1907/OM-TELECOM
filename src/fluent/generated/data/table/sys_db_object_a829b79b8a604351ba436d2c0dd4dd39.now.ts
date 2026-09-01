import { Table, ReferenceColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_prod_svc = Table({
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
            element: 'product_spec',
        },
        {
            name: 'index2',
            unique: false,
            element: 'service_spec',
        },
    ],
    label: 'Product Service Mapping',
    name: 'x_973795_om_tele_0_prod_svc',
    schema: {
        product_spec: ReferenceColumn({
            label: 'Product Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_prod_spec',
        }),
        mandatory: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        quantity: IntegerColumn({
            default: '1',
            maxLength: 40,
        }),
        sequence: IntegerColumn({
            default: '0',
            maxLength: 40,
        }),
        service_spec: ReferenceColumn({
            label: 'Service Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_svc_spec',
        }),
    },
})
