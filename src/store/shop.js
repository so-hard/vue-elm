import { getShiopItem,getRestaurantDetail } from "./../serve/getData";

const state = {
    restaurant_category_id: [], //类别
    order_by: null, //怎么样排序
    delivery_mode: null, //配送方式
    support_ids: null, //服务支持
    resId: null,
    restaurant_detail: null,
    restaurant_items: null,
    is_scoll: null
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
      console.log(typeof state.restaurant_items)
      if(state.restaurant_items != null){
        let arr = [];
         arr = state.restaurant_items.map( val=> {
          return val.name
        })
        console.log(arr)
        return arr
      }
       
      // return [] = state.restaurant_items.map(val => {
      //   return val.name;
      // })
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
    setRestaurantDetail(state,payload){
      state.restaurant_detail = payload.data
    },
    setRestaurantItems(state,payload){
      state.restaurant_items = payload.data
    },
    setScroll(state,val){
      state.is_scoll = val
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
        }
      )
    },

    fetchRestaurantDetail({
      commit
    }, payload) {
      return getRestaurantDetail(payload.id).then(
        res => {
          commit('setRestaurantDetail', {
            data: res.data
          })
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