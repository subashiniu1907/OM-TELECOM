import { Table, StringColumn, MultiLineTextColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_973795_om_tele_0_svc_spec = Table({
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
        prefix: 'SS',
    },
    display: 'name',
    label: 'Service Specification',
    name: 'x_973795_om_tele_0_svc_spec',
    schema: {
        version: StringColumn({
            maxLength: 20,
        }),
        description: MultiLineTextColumn({
            maxLength: 4000,
        }),
        number: StringColumn({
            maxLength: 40,
        }),
        service_type: StringColumn({
            choices: {
                internet: {
                    label: 'Internet',
                    sequence: 1,
                },
                mobile: {
                    label: 'Mobile',
                    sequence: 2,
                },
                voice: {
                    label: 'Voice',
                    sequence: 3,
                },
                vpn: {
                    label: 'VPN',
                    sequence: 4,
                },
                ip_connectivity: {
                    label: 'IP Connectivity',
                    sequence: 5,
                },
                data: {
                    label: 'Data',
                    sequence: 6,
                },
            },
            maxLength: 40,
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
        name: StringColumn({
            mandatory: true,
            maxLength: 200,
        }),
    },
})
