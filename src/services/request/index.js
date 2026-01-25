import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/mainStore'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)

class HYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use((config) => {
      isLoading.value = true
      return config
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use((res) => {
      isLoading.value = false
      return res
    }, (err) => {
      isLoading.value = false
      return err
    })
  }
  request(config) {
    // isLoading.value = true
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
          // 成功的回调
        resolve(res.data || res)
        // isLoading.value = false
      }).catch(err => {
        reject(err)
        // isLoading.value = false
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