import axios from 'axios'
import Vue from 'vue'
const http = axios.create(
  {
    headers:{
      'Authorization':'Basic cGFuZGE4QDEyNi5jb206amlhamlhMTIz'
    }
  }
)

http.interceptors.response.use(
  response => {
    let data = response
    return Promise.resolve(data)
  },
  error=>{
    console.error(error);
    return Promise.reject(error)
  }
)

const get = (url,params) => http.get(url,{params});
const post = (url,params)=>http.post(url,params);
const del = (url,id)=>http.post(`${url}/${id}`);
const put = (url,id,params)=>http.post(`${url}/${id}`,params);

let api = {
  get,
  post,
  del,
  put
}
Vue.prototype.$http = api;

export default api;
