import {setStore} from '../extend/storage'
// import { string } from 'postcss-selector-parser';
// import { type } from 'os';
// import Axios from '../extend/axios'

const state = {
    userInfo: null, //object
    userId: null
}

const getters = {
    currentUser:state => {
        return {
            userInfo: state.userInfo,
            userId: state.userId
        }
    }
}

const mutations = {
    setUserInfo(state,info) {
        if(typeof info == 'string'){
            state.userInfo = JSON.parse(info);
            console.log(state.userInfo)
        }else{
            state.userInfo = info
        }
        setStore('userinfo',state.userInfo);
    },
    setUserId(state,id) {
        state.userId = id;
    }
}


const action = {
    // getUserInfo()

}
export default {
    state,
    mutations,
    getters,
    action
}