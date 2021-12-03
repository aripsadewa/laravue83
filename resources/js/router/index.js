export default {
    mode: 'history',
    linkActiveClass: 'active',

    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../views/Home.vue"),
        },
        {
            path: '/about',
            name: 'pages.about',
            component: () => import("../views/About.vue"),
        },
        {
            path: '/contact',
            name: 'pages.contact',
            component: () => import("../views/Contact.vue"),
        }
    ]
}