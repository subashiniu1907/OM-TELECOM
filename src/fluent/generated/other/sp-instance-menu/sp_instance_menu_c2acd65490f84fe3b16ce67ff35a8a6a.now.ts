import { SPMenu } from '@servicenow/sdk/core'

SPMenu({
    $id: Now.ID['c2acd65490f84fe3b16ce67ff35a8a6a'],
    title: 'OM Telecom Menu',
    widget: '5ef595c1cb12020000f8d856634c9c6e',
    column: '',
    placeholderDimensions: {
        mobile: {
            height: '250px',
            width: '100%',
        },
        desktop: {
            height: '250px',
            width: '100%',
        },
        tablet: {
            height: '250px',
            width: '100%',
        },
    },
    items: [
        {
            $id: Now.ID['02211110280b47118ffa3b8178666b2c'],
            label: 'New Order',
            order: 300,
            active: true,
            glyph: 'plus',
            color: 'default',
            type: 'page',
            page: '508fa1298d954c2a966100ab1da1664b',
        },
        {
            $id: Now.ID['bdef4df4b06f4fbbbae28296585790e0'],
            label: 'Home',
            order: 100,
            active: true,
            glyph: 'home',
            color: 'default',
            type: 'page',
            page: 'b1f2e858d0024ea48842b3d6334a32f8',
        },
        {
            $id: Now.ID['e68ce3ca681047d2a8a15d8cbf299f99'],
            label: 'Orders',
            order: 200,
            active: true,
            glyph: 'list-alt',
            color: 'default',
            type: 'page',
            page: '39f59255bd2943b7b90891285d0ef59c',
        },
        {
            $id: Now.ID['e6b3f97649ae44e0bc8791958f597f9c'],
            label: 'Products',
            order: 400,
            active: true,
            glyph: 'th',
            color: 'default',
            type: 'page',
            page: '56792c060be2415b939850844bed479f',
        },
    ],
    asyncLoadTrigger: 'viewport',
    asyncLoadDeviceType: 'desktop,tablet,mobile',
})
