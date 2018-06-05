import store from '../store/index'

export const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['auth/getAuthUserStatus']) {
    next()
    return
  }
  next('/')
}

export const ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/getAuthUserStatus']) {
    next()
    return
  }
  next('/login')
}
