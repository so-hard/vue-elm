const state = {
    restaurant_category_id: [],
    order_by: null,
    delivery_mode: null,
    support_ids: null,
    restaurant_category_ids: null,
    resId: null
},
getters = {
  getRestaurantId: state => {
    return state.restaurant_category_id
  },
  gtOrderId: state =>{
    return state.order_by
  },
  getResId: state => {
    return state.resId
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
    setResId(state,id) {
      state.resId = id
    }
  };


export default {
  state,
  getters,
  mutations,
}