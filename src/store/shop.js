const state = {
  
    restaurant_category_id: [],
    order_by: null,
    delivery_mode: null,
    support_ids: null,
    restaurant_category_ids: null
},
getters = {
  getRestaurantId: state => {
    return state.restaurant_category_id
  },
  gtOrderId: state =>{
    return state.order_by
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
    }
  };


export default {
  state,
  getters,
  mutations
}