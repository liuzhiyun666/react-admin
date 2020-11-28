export default [
  {path: '/login', title: '登录', component: '@/pages/login/login.tsx'},
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {path: '/home', component: '@/pages/home/home.tsx'}
    ],
  }
]
