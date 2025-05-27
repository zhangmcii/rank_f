const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/scores.vue'),
  },
]

export default routes
