import {setStore} from '../extend/storage'
// import { string } from 'postcss-selector-parser';
// import { type } from 'os';
// import Axios from '../extend/axios'

const state = {
    userInfo: null //object
}

const getters = {
    currentUser:state => {
        return {
            userInfo: state.userInfo,
        }
    }
}

const mutations = {
    setUserInfo(state,payload) {
        console.log(typeof payload)
        if(typeof payload == 'string'){
            state.userInfo = JSON.parse(payload);
        }else{
            state.userInfo = payload
        }
        setStore('userinfo',payload);
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