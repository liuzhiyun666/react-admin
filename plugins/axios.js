//axios请求封装
export default function ({$axios, redirect,app}) {
  $axios.defaults.withCredentials = true;
  $axios.onRequest(config => {
      if (config.method === 'post') {
        // config.withCredentials = true;
        config.headers = {
          'Content-Type': 'application/json',
          'mat': `mat=${app.$cookies.get('mat')}`
        }
        config.data = config.data ? JSON.stringify(config.data) : '{}';
        // config.url = '/'
      }
      return config;
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
 $axios.onResponse(response => {
   return response.data;
 },error =>{
   console.log(error)
   return Promise.reject(error);
 })

}
