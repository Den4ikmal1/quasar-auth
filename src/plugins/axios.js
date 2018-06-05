import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL
})

export default ({app, router, Vue}) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
