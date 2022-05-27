export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/modelStudy',
    icon: 'form',
    name: 'modelStudy',
    component: './modelStudy',
  },
  {
    path: '/secureCheck',
    icon: 'form',
    name: 'secureCheck',
    component: './secureCheck',
  },
  {
    path: '/',
    redirect: '/user/login',
  },
  {
    component: '404',
  },
]
