/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 09:10:54
 * @LastEditTime: 2019-09-02 16:00:57
 * @LastEditors: Please set LastEditors
 */

import {
  getShiopItem,
  getRestaurantDetail,
  addCharts
} from "./../serve/getData";
import {
  doneWithInsidValue
} from "./../extend/tool"

const state = {
    restaurant_category_id: [], //类别
    order_by: null, //怎么样排序
    delivery_mode: null, //配送方式
    support_ids: null, //服务支持
    resId: null,
    restaurant_items: null,
    is_scoll: null,
    shoppingCar: [

    ],
  },

  getters = {
    getRestaurantId: state => {
      return state.restaurant_category_id
    },
    gtOrderId: state => {
      return state.order_by
    },

    getItemsHeader: state => {
      if (state.restaurant_items != null) {
        let arr = [];
        arr = state.restaurant_items.map(val => {
          let data = {}
          data.name = val.name
          data.id = val.id
          return data
        })
        return arr
      }
    },
    /**
     * @description: 获取当前商品添加到购物车的数量
     * @param {number} itemId 该商品位于哪个组
     * @param {number} curid  自身id
     * @return: 
     */
    getCarListNum: state => (itemid, curid) => {
      let arr = [state.resId, itemid, curid],
        reslut = doneWithInsidValue(state.shoppingCar, arr);
      if(reslut[2])
        return reslut[2].value.quantity
      return 0
    },

    /**
     * @description: 获取该组添加到购物车的数量
     * @param {number} itemId 店铺分类组id 
     * @return: 
     */
    getItemCartNum: state => (itemId) => {
      let reslut;
       doneWithInsidValue(state.shoppingCar,[state.resId,itemId],(val)=>{
        reslut= val.value.reduce((acc,cur)=>{
          return acc + cur.value.quantity
        },0)
      })
      return reslut
    },


    /**
     * @description: 该店铺加入购物车所有的数量
     * @param key {Number}  店铺的id
     * @return: function
     */
    getTotalNum: state => (key=state.resId) => {
      let reslut;
      doneWithInsidValue(state.shoppingCar,[key],(val)=>{
        reslut = val.value.reduce((acc,val)=>{
            return acc + val.value.reduce((acc,val)=>{
            return acc+ val.value.quantity
          },0)
        },0)
      })
      return reslut
    },

    getShopcartList: state => {
      let reslut= [];
      doneWithInsidValue(state.shoppingCar,[state.resId],(val)=> {
        reslut = val.value.reduce((acc,val)=>{
          return acc.concat(val.value) 
        },[])
      })
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
    setCurCart(state) {
      let {
        resId,
        shoppingCar
      } = state;
      
      if (shoppingCar.length === 0 || !shoppingCar.find((val) => val.shopId === resId)){
        shoppingCar.push({
          shopId: resId,
          value: []
        })
      }
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
    setRestaurantItems(state, payload) {
      state.restaurant_items = payload.data
    },
    setScroll(state, val) {
      state.is_scoll = val
    },
    addShopCar(state, payload) {
      // console.log(doneWithInsidValue(state.shoppingCar, [state.resId, payload.itemId,payload.listId]))
      // return
      let curShopItemCart = doneWithInsidValue(state.shoppingCar, [state.resId, payload.itemId,payload.listId]);
      console.log(curShopItemCart)
      switch (curShopItemCart.length) {
        case 1:
          curShopItemCart[0].value.push(
            {
              itemId: payload.itemId,
              shopId: payload.shopId,
              value: [{
                itemId: payload.itemId,
                shopId: payload.shopId,
                listId: payload.listId,
                value: payload.value,
              }]
            }
          )
          break;
        case 2:
          curShopItemCart[1].value.push(
            {
              itemId: payload.itemId,
              shopId: payload.shopId,
              listId: payload.listId,
              value: payload.value,
            }
          )
          break;
      }
      doneWithInsidValue(state.shoppingCar, [state.resId, payload.itemId, payload.listId], (val) => {
        val.value.quantity++
      })
    },
    decreaseShopCar(state, payload) {
      doneWithInsidValue(state.shoppingCar, [state.resId, payload.itemId, payload.listId], (val,index,reslut) => {
        val.value.quantity--
        if(val.value.quantity ==0){
          reslut[1].value.splice(index,1)
        }
      })
    },
    setCart(state, val) {
      state.shoppingCar = JSON.parse(val)
    }
  },


  actions = {
    fetchShopItems({
      state,
      commit
    }) {
      return getShiopItem(state.resId).then(
        res => {
          commit('setRestaurantItems', {
            data: res.data
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
    },
    
    fetchShopCarts({state,getters},{geohash}){
     let entities = [getters.getShopcartList.map(
      (val)=> val.value
    )]
      return addCharts(state.resId,geohash,entities).then(
        res =>{
          console.log(res)
      })
    }
  }




export default {
  state,
  getters,
  mutations,
  actions
}