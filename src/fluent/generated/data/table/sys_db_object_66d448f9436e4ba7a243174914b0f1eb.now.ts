import { Table, StringColumn, BooleanColumn, MultiLineTextColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_res_spec = Table({
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
        prefix: 'RS',
    },
    display: 'name',
    label: 'Resource Specification',
    name: 'x_973795_om_tele_0_res_spec',
    schema: {
        number: StringColumn({
            maxLength: 40,
        }),
        resource_type: StringColumn({
            choices: {
                hardware: {
                    label: 'Hardware',
                    sequence: 1,
                },
                network: {
                    label: 'Network',
                    sequence: 2,
                },
                ip: {
                    label: 'IP',
                    sequence: 3,
                },
                sim: {
                    label: 'SIM',
                    sequence: 4,
                },
                cpe: {
                    label: 'CPE',
                    sequence: 5,
                },
                port: {
                    label: 'Port',
                    sequence: 6,
                },
                identifier: {
                    label: 'Identifier',
                    sequence: 7,
                },
                subscription: {
                    label: 'Subscription',
                    sequence: 8,
                },
            },
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
        active: BooleanColumn({
            default: true,
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
        version: StringColumn({
            maxLength: 20,
        }),
        description: MultiLineTextColumn({
            maxLength: 4000,
        }),
    },
})
