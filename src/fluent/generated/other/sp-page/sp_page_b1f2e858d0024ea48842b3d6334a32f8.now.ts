import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Home',
    category: 'custom',
    pageId: 'omt_home',
    containers: [
        {
            $id: '02340f724be54feaa5274395a2f45207',
            order: 1,
            name: 'Dashboard Container',
            rows: [
                {
                    $id: '3b8f7ff7dc3d4c5498b74284fbd7c8dc',
                    order: 1,
                    columns: [
                        {
                            $id: '86635eeb6d4b464ab7527b6a0b85f430',
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: '0609707da0fa4708ad88fc46d8f2f054',
                                    widget: '5f165b89acfa4c59b2623d0d02fdcb64',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
