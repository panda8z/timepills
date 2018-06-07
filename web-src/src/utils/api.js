import axios from 'axios'
import Vue from 'vue'
const http = axios.create()

http.interceptors.response.use(
  response => {
    let data = response
    return Promise.resolve(data)
  }
)

const get = (url,params) => http.get(url,{params})

let api = {
  get
}
Vue.prototype.$http = api;

export default api;
