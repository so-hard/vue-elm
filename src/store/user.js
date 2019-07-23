import {setStore} from './../extend/storage'
import {login} from './../serve/getData'
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
            // console.log(state.userInfo)
        }else{
            state.userInfo = info
        }
        setStore('userinfo',state.userInfo);
    },
    setUserId(state,id) {
        state.userId = id;
    }
}


const actions = {
    fetchLogin({
        commit
    }, Payload) {
        // console.log(Payload)
        return login(Payload).then(
            res => {
                if (res.data.status != 0)
                    commit('setUserInfo', res.data)
                return res
            }
        )
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
