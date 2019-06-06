// import {setStore} from '../extend/storage'
import { getDeteilAddress } from '../serve/getData'


const state = {
    curCity: null,
    keyworld: '',
    curAddress: null,
    defaultAddress: { 
    name: "田林十一村", 
    address: "上海市徐汇区田林", 
    latitude: 31.17158, 
    longitude: 121.42575, 
    geohash: "31.17158,121.42575" 
}
},
    getters = {
        curCity: state => {
            if (state.curCity != null) {
                return state.curCity
            } else {
                return "请选择城市"
            }
        },
        curAddress: state => {
            if (state.curAddress != null) {
                return state.curAddress
            } else {
                return state.defaultAddress
            }
        }
    },

    actions = {
        searchDetailLi({ getters }) {
            let [id, key] = getters.getSearchValue
            getDeteilAddress(id, key).then(
                rep => {
                    console.log(rep)
                    return rep.data
                }
            )
        }
    },

    mutations = {
        setCityId(state, city) {
            state.curCity = city
        },

        setCurAddress(state, address) {
            state.curAddress = address
        }

    }



export default {
    state,
    mutations,
    getters,
    actions
}