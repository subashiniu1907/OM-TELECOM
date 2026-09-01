import { SPMenu } from '@servicenow/sdk/core'

SPMenu({
    $id: Now.ID['eade654d091d4e129b5899f82c39dd46'],
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
            $id: Now.ID['1a5fd4d0afab486d8874ea755b80d7ee'],
            label: 'Home',
            order: 100,
            active: true,
            glyph: 'home',
            color: 'default',
            type: 'page',
            page: '50bfb3c7de2d42fea1d6eef8d112d28b',
        },
        {
            $id: Now.ID['271ddb8ed80546c28c06332884f5ec56'],
            label: 'Products',
            order: 400,
            active: true,
            glyph: 'th',
            color: 'default',
            type: 'page',
            page: '3ca75295b9c24d7080426a4644876ba3',
        },
        {
            $id: Now.ID['5a70d8bf15de40c5b8d9eefc942056bd'],
            label: 'Orders',
            order: 200,
            active: true,
            glyph: 'list-alt',
            color: 'default',
            type: 'page',
            page: 'fb4dab44d27b4e66bac8fb761d438952',
        },
        {
            $id: Now.ID['61df51c4eb79417d9e4ac0a0d8486cc5'],
            label: 'New Order',
            order: 300,
            active: true,
            glyph: 'plus',
            color: 'default',
            type: 'page',
            page: 'ed007b868098472c87be0149f814c50e',
        },
    ],
    asyncLoadTrigger: 'viewport',
    asyncLoadDeviceType: 'desktop,tablet,mobile',
})
