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
        },
        {
            path: '/notes/create',
            name: 'notes.create',
            component: () => import("../views/notes/Create.vue"),
        },
        {
            path: '/notes/table',
            name: 'notes.table',
            component: () => import("../views/notes/Table.vue"),
        },
        {
            path: '/notes/:noteSlug',
            name: 'notes.show',
            component: () => import("../views/notes/Show.vue"),
        }
    ]
}