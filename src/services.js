import axios from 'axios';

const axiosInstances = axios.create({
  baseURL: "https://apitodolist.tk/wp-json"
})

axiosInstances.interceptors.request.use( 
  function(config) {
    const token = window.localStorage.token;
    if(token) {
      config.headers.Authorization = token
    }
    return config;
  },
  function (error) {
    return Promise.reject(error)
  }
 )

export const api  = {
  get(endpoint) {
    return  axiosInstances.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstances.post(endpoint, body)
  },
  delete(endpoint) {
    return axiosInstances.delete(endpoint)
  },
  login(body){
    return axios.post("https://apitodolist.tk/wp-json/jwt-auth/v1/token/", body)
  },
  validateToken() {
    return axiosInstances.post("https://apitodolist.tk/wp-json/jwt-auth/v1/token/validate")
  }/* ,
  getUsuarioHeader(endpoint){
    return axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`
      }
    })
  } */
}