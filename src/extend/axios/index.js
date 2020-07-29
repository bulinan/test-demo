// import httpServer from './base';
// import GitHub from './github';
// import githubToken from './githubConfig.js'

// const project = {
//   github:{
//     baseURL: 'https://api.github.com',
//     token: githubToken
//   }
// };

// const actions = {
//   http(pName, method, url, data){
//     return httpServer({method: method,url: url}, data, ...Object.values(project[pName])).then((res) => {
//       return res;
//     })
//   }
// };

// cont getIssues(data){
//   return this.http('github', 'post', '/graphql', data)
// }


// export default Object.assign(
//     actions, GitHub
// );
import axios from './base'

const servie = (url,options) => {
    return new Promise((resolve,reject) => {
        console.log({...options});
        axios({
            url: url,
            ...options
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(reject);
        });
    });
};
const axiosGet = (url,playload) => {    
    return servie(url,{params: playload,method: 'GET'});
}
const axiosPost = (url,playload) => {
    return servie(url,{data: playload,method: 'POST'});
}

export { axiosGet, axiosPost }