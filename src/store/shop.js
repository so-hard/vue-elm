/*
 * @Description: shop data some action
 * @Author: so-hard
 * @Date: 2019-08-17 14:49:50
 * @LastEditTime: 2019-08-21 22:55:27
 * @LastEditors: Please set LastEditors
 */
import { getShiopItem,getRestaurantDetail } from "./../serve/getData";

const state = {
    restaurant_category_id: [], //类别
    order_by: null, //怎么样排序
    delivery_mode: null, //配送方式
    support_ids: null, //服务支持
    resId: null,
    restaurant_items: null,
    is_scoll: null,
    shoppingCar: {

    },
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
      if(state.shoppingCar[state.resId][key])
        return state.shoppingCar[state.resId][key][1]
      return 0
    },
    getTotalNum: state => () => {
      let cart = state.shoppingCar[state.resId]
      return Object.keys(cart).map(
        (val)=> cart[val][1]
      ).reduce(
        (acc,cur)=> acc+cur,0
      )
    },
    // getCartShop: state => () => {
    //   let cart = state.shoppingCar[state.resId],
      
    // }
  },

  mutations = {
    setRestaurantId(state, id) {
      state.restaurant_category_id = id
    },
    setOrderId(state, id) {
      state.order_by = id
    },
    setCurCar(state){
      if(!state.shoppingCar[state.resId])
        state.shoppingCar[state.resId] = {}
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
      let cart  = state.shoppingCar[state.resId];
      if(!cart[val._id]){
        cart[val._id]=[]
        cart[val._id].push(val)
        cart[val._id].push(0)
      }
      cart[val._id][1]++
    },
    decreaseShopCar(state,val) {
      let cart = state.shoppingCar[state.resId];
      cart[val._id][1]--
    },
    setCart(state,val){
      state.shoppingCar = JSON.parse(val) 
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