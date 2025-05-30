const routes = [
  {
    path: '/',
    name: 'pure',
    component: () => import('../views/scores.vue'),
  },
  {
    path: '/el',
    name: 'home',
    component: () => import('../views/scores1.vue'),
  },
]

export default routes
