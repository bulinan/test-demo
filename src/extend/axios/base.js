import axios from 'axios';

let instance = axios.create();
let token = localStorage.getItem('token'); 

instance.defaults.baseURL = 'https://api.github.com';
instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers['Authorization'] = `Bearer ${token}`;
  //config.headers['X-Requested-With'] = 'XMLHttpRequest';

  return config
}, error => {
  return Promise.reject(error)
});


instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
});

export default instance