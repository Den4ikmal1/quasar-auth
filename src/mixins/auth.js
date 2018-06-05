import store from '../store/index'

export const Auth = {
  computed: {
    currentUser () {
      return store.getters['auth/getAuthUserStatus']
    }
  }
}
