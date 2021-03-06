import axios from 'axios'
import {Message}  from "element-ui"

//封装axiso 
const Axios = axios.create({
    //使其使用cookie
    withCredentials: true,
    baseURL: 'https://elm.cangdu.org/'
})

Axios.interceptors.response.use(
    res => {
        console.log(res)
        if(res.data && res.data.status==0){
            // 调用message 来显示错误消息
            Message(
                {
                    message: res.data.message,
                    type: "error",
                    duration: 1200,
                    showClose: true,
                    offset: 200
                }
            );
        }
        if(res.data.length == 0) {
            Message(
                {
                    message: "没有更多数据了",
                    type: "error",
                    duration: 1200,
                    showClose: true,
                    offset: 200
                }
            );
        }
        return res;
    },
)

export default Axios