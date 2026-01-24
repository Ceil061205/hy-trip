import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class HYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
          // 成功的回调
          resolve(res.data || res)
        }).catch(err => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)