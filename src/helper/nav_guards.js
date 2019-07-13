export function navguards(store, router) {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const currentUser = store.state.currentUser

    if (requiresAuth && !currentUser) {
      alert('Can not access the page.\nPlease login first')
      next('/Login')
    } else {
      next()
    }
  })
}
