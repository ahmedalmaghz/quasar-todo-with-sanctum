// import something here

// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }

import axios from 'axios' 

//axios.defaults.withCredentials = true;
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const axiosInstance = axios.create({ 
  
  baseURL: 'https://maghz.dev' ,
  withCredentials :true,
  headers:{'X-Requested-With': 'XMLHttpRequest'}
})

//axiosInstance.defaults.withCredentials = true;
//axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default ({ Vue }) => {
  //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  Vue.prototype.$axios = axios
}
export { axiosInstance }