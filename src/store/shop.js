import { getShiopItem,getRestaurantDetail } from "./../serve/getData";

const state = {
    restaurant_category_id: [], //类别
    order_by: null, //怎么样排序
    delivery_mode: null, //配送方式
    support_ids: null, //服务支持
    resId: null,
    restaurant_items: null,
    is_scoll: null,
    shoppingCar: new Map(),
  },
  getters = {
    getRestaurantId: state => {
      return state.restaurant_category_id
    },
    gtOrderId: state => {
      return state.order_by
    },
    getResId: state => {
      return state.resId
    },
    getItemsHeader: state => {
      if(state.restaurant_items != null){
        let arr = [];
         arr = state.restaurant_items.map( val=> {
          return val.name
        })
        return arr
      }
    },
    getCarListNum: state => key => {
      return state.shoppingCar.get(key)
    }
  },

  mutations = {
    setRestaurantId(state, id) {
      state.restaurant_category_id = id
    },
    setOrderId(state, id) {
      state.order_by = id
    },
    setSupportId(state, id) {
      state.support_ids = id
    },
    setDeliveryId(state, id) {
      state.delivery_mode = id
    },
    setResId(state, id) {
      state.resId = id
    },
    setRestaurantItems(state,payload){
      state.restaurant_items = payload.data
    },
    setScroll(state,val){
      state.is_scoll = val
    },
    addShopCar(state,val){
      let car  = state.shoppingCar;
      car.has(val) ? car.set(val, car.get(val)+1) : car.set(val,1)
    },
    decreaseShopCar(state,val) {
      let car = state.shoppingCar;
      car.set(val,car.get(val)-1)
    }
  },


  actions = {
    fetchShopItems({
      state,commit
    }) {
     return getShiopItem(state.resId).then(
        res => {
          commit('setRestaurantItems',{
            data : res.data
          })
          return res.data
        }
      )
    },

    fetchRestaurantDetail({
      state
    }) {
      return getRestaurantDetail(state.resId).then(
        res => {
            return res.data
        }
      )
    }
  }




export default {
  state,
  getters,
  mutations,
  actions
}