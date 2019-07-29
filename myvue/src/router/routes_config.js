export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('@/containers/home')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ('@/containers/detail')
    },
    {
        path: '/mian',
        component: () =>
            import ('@/containers/main')
    },
    {
        path: '/my',
        component: () =>
            import ('@/containers/my')
    },
    {
        path: '/login',
        component: () =>
            import ('@/containers/login')
    }
];