import axios from 'axios'
import * as config from './config'

const instance = axios.create({
  baseURL: config.API_BASE_URL
})

instance.defaults.baseURL = config.API_BASE_URL
instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.$cookies.get('user-token')
instance.defaults.headers.get['Accepts'] = 'application/json'

instance.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

instance.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

export default instance