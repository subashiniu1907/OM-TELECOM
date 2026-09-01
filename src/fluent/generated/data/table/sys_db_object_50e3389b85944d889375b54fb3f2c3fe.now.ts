import { Table, ReferenceColumn, BooleanColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_svc_res = Table({
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
            element: 'resource_spec',
        },
        {
            name: 'index2',
            unique: false,
            element: 'service_spec',
        },
    ],
    label: 'Service Resource Mapping',
    name: 'x_973795_om_tele_0_svc_res',
    schema: {
        service_spec: ReferenceColumn({
            label: 'Service Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_svc_spec',
        }),
        mandatory: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        resource_spec: ReferenceColumn({
            label: 'Resource Specification',
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_973795_om_tele_0_res_spec',
        }),
        sequence: IntegerColumn({
            default: '0',
            maxLength: 40,
        }),
        quantity: IntegerColumn({
            default: '1',
            maxLength: 40,
        }),
    },
})
