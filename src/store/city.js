// import {setStore} from '../extend/storage'

const state = {
    curCity : null
    // cityId: []
},
 getters = {
    currentCuty:state => {
        return {
            curCity: state.curCity,
            // cityId: state.cityId
        }
    }
}, 
actions = {
    // setCurCity ({commit},{type}) {
    //     return getCity(type)
    // }
},

 mutations = {
    setCityId(state,city) {
        state.curCity = city
    }
}



export default {
    state,
    mutations,
    getters,
    actions
}