import { axiosInstance } from '../../plugins/axios'
import setAxiosHeader from '../../share/utils/setAxiosHeaderAuthorization'

export const login = ({ commit }, form) => {
  return axiosInstance.post('login', form)
    .then(response => {
      commit('authLogin', { token: response.data.token, user: response.data.user })
      setLocalStorageAttributes(response.data)
      setAxiosHeader(response.data.token)
    })
    .catch(err => {
      commit('authError', err)
    })
}

export const register = ({ commit }, data) => {
  return axiosInstance.post('register', data)
    .then(response => {

    })
    .catch(error => {
      console.error('register error: ', error)
    })
}

export const logout = ({ commit }, data) => {
  return axiosInstance.post('logout')
    .then(response => {
      commit('authLogout')
      setLocalStorageAttributes()
    })
    .catch(err => {
      console.error('logout errors: ', err)
    })
}

const setLocalStorageAttributes = function (data = null) {
  if (data) {
    window.localStorage['user-token'] = data.token
    window.localStorage['userId'] = data.user.id
  } else {
    window.localStorage.removeItem('user-token')
    window.localStorage.removeItem('userId')
  }
}
