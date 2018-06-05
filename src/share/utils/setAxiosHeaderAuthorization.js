import { axiosInstance } from '../../plugins/axios'

const setAxiosHeader = function (token) {
  axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export default setAxiosHeader
