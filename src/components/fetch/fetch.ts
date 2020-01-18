import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import { getRequestId } from '../../util'

interface Response {
    code: number,
    msg: string,
    data: any
}

let defaultConfig = {
    baseURL: '/',
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
};

interface Fetch {
    getHeader(headers): any
    getRequestURL(url:string):string
}

export const fetch = <AxiosInstance & Fetch>axios.create( defaultConfig );
fetch.getRequestURL=url=>{
    return url
}
fetch.getHeader = headers=>{
    // 扩展全局headers
    let _header={
        requestid : getRequestId( 'student-pad' )
    };
    if(headers && typeof(headers)=='object'){
        Object.assign(headers, _header);
    }
    return headers;
};


fetch.interceptors.request.use( config=>{
    config = Object.assign(config || {}, defaultConfig);
    if(config.method == 'post'){
        if (config.headers['Content-Type'] === "application/x-www-form-urlencoded;charset=utf-8"){
            config.data = qs.stringify(config.data);
        }
    }
    //添加requestId
    /* global ENV */
    // if(ENV !== 'localhost'){
        Object.assign(config.headers,fetch.getHeader(config.headers));
        Object.assign(config.headers,{'X-Requested-With': 'XMLHttpRequest'});
    // }
    config.url = fetch.getRequestURL(config.url);
    return config;
})



//返回状态判断(添加响应拦截器)
fetch.interceptors.response.use( res=> {
    const data = res.data;
    // closeLoading();
    if(data && data.code == 0){
        return data.data;
    } else {
        if(data.code == '3995'){
            alert('logout~~')
        }else{
            return Promise.reject(data);
        }
    }
}, error => {
    if (error.response && error.response.status === 404) {
        console.log('404 Not found');
    }else{
        console.log('网络错误');
    }
    // closeLoading();
    return Promise.reject(error.response);
});



export const get=(url: string, data?:any):Promise<Response>=>{
    return fetch.get(url, data)
}
export const post=(url: string, data?:any):Promise<Response>=>{
    return fetch.post(url, data)
}