import axios from 'axios'
import { Toast, Dialog } from 'vant'
import { ERR_OK } from '@/config.js'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout 
})

let toast = undefined

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    toast = Toast.loading({
      message: '加载中',
      forbidClick: true
    })
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

//response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    toast.clear() // clear toast
    const res = response
    // if the custom code is not 200, it is judged as an error.
    if (res.status !== ERR_OK) {
      Dialog({
        message: res.message || 'Error',
      })
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Dialog({
      message: error.message,
    })
    return Promise.reject(error)
  }
)

export default service
