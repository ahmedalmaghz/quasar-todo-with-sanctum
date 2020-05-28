const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue'),name:'home'},
      {path: '/help', component: () => import('pages/help.vue')},
      {
        path: '/github', beforeEnter() {
          location.href = 'https://github.com/ahmedalmaghz/quasar-todo'
        }
      },
      {
        path: '/signin',
        name: 'SignIn',
        component:()=>import('pages/SignIn')
      },
      {
        path: '/signout',
        name: 'SignOut',
        component:()=>import('pages/SignOut')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
