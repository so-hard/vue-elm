/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:10:54
 * @LastEditTime: 2019-08-23 20:09:56
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
           let data = {
           }
           data.name = val.name
           data.id = val.id
          return data
        })
        return arr
      }
    },
    /**
     * @description: 
     * @param {number} itemId {number}
     * @param curid 
     * @return: 
     */    
    getCarListNum: state => (itemid,curid) => {
      let cart = state.shoppingCar[state.resId]
        if(cart){
          if(cart[itemid]){
            if(cart[itemid][curid])
              return Object.keys(cart[itemid][curid]).length>0 ? cart[itemid][curid].quantity : 0
          }
        }
        return 0
    },
    getItemCartNum: state => (itemId)=>{
      let cart = state.shoppingCar[state.resId]
      if(cart[itemId]){
        let obj = cart[itemId]
        return Object.keys(obj).reduce(
          (acc,cur)=>{
            return acc + obj[cur].quantity
          },0
        )
      }
    },


    /**
     * @description: 获取一个店铺添加到购物车的数量
     * @param key {Number}  店铺的id
     * @return: function
     */    
    getTotalNum: state => (key) => {
      let cart = state.shoppingCar[key]
      if(!cart){
        return 0
      }
      return Object.keys(cart).reduce(
        (acc,cur)=> {
          let obj = cart[cur],
          a = Object.keys(obj).reduce(
            (acc,cur)=>  acc + obj[cur].quantity,0
          )
          return acc + a
        },0
      )
    },

    getShopcartList: state => {
      let cart = state.shoppingCar[state.resId],
        reslut = [];
      if(!cart){
        return 0
      }
        let fun = (obj,dep)=>{
          let data = obj;
            for (const key in data) {
              console.log(data[key])
              if(dep>1)
                fun(data[key],dep-1)
              if(dep==1)
                reslut.push(data[key])
              }
          }
        fun(cart,2)
        return reslut
    }
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
    addShopCar(state,payload){
      let cart  = state.shoppingCar[state.resId],
      {itemid,shopdata} = payload;
      if(!cart[itemid])
        cart[itemid]={}
      if(!cart[itemid][shopdata.id])
        cart[itemid][shopdata.id] = shopdata
      cart[itemid][shopdata.id].quantity ++
    },
    decreaseShopCar(state,payload) {
      let cart  = state.shoppingCar[state.resId],
      {itemid,shopdata} = payload;
      cart[itemid][shopdata.id].quantity --
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