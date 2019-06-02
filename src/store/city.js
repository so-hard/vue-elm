// import {setStore} from '../extend/storage'
import {getDeteilAddress} from '../serve/getData'


const state = {
    curCity : null,
    keyworld: '',
    curAddress: null
},
 getters = {
    curCity:state => {
        if(state.curCity!=null){
            return state.curCity
        }else{
            return "请选择城市"
        }

    },
    curAddress: state => {
        if(state.curAddress!=null){
            return state.curAddress
        }else{
            return "请选择地址"
        }
    }
},

actions = {
searchDetailLi ({getters}) {
         let [id,key] = getters.getSearchValue
        getDeteilAddress(id,key).then(
            rep =>{
                console.log(rep)
                return rep.data
            }
        )
    }
},

 mutations = {
    setCityId(state,city) {
        state.curCity = city
    },

    setCurAddress(state,address) {
        state.curAddress = address
    }
    
}



export default {
    state,
    mutations,
    getters,
    actions
}