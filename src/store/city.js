// import {setStore} from '../extend/storage'
import {getCity} from '../serve/getData'

const state = {
    curCity : '无法获取地理位置'
},
 getters = {
    currentCuty:state => {
        return {
            curCity: state.curCity,
        }
    }
}, 
actions = {
    setCurCity ({commit},{type}) {
        return getCity(type)
    }
},

 mutations = {
    setCurCity(state,city) {
        // getCity()
        state.curCity = city
        console.log(state.curCity)
    }
}



export default {
    state,
    mutations,
    getters,
    actions
}