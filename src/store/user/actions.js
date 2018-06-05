import { axiosInstance } from '../../plugins/axios'

export const me = ({commit, dispatch}) => {
  axiosInstance({ url: 'me', method: 'GET' })
    .then(resp => {
      commit('userSuccess', resp.data)
    })
    .catch(errors => {
      commit('userError', errors)
    })
}
