import Axios from './../extend/axios'


export const login = ({username, password, captcha_code}) => 
     Axios.post(
    'v2/login',
    {
        username,
        password,
        captcha_code
    }
)

    

export const getCaptchas = () => Axios.post('v1/captchas');

export const signOut = () => Axios.get('v2/signout')

export const getOrder = (user_id, limit, offset) => Axios.get(
    `bos/v2/users/${user_id}/orders`,
    {
        params: {
            limit,
            offset
        }
    }
)

export const getOrderDetail = (user_id, order_id) => Axios.get(
    `bos/v1/users/${user_id}/orders/${order_id}/snapshot`
)


//获取城市
export const getCity = (type) => Axios.get(
    `v1/cities/?type=${type}`, {

    }
)

export const getDeteilAddress = (city_id, keyword) => Axios.get(
    `v1/pois`, {
        params: {
            city_id,
            keyword
        }
    }
)

export const getFoodType = () => Axios.get(
    'v2/index_entry'
)


//餐馆列表
export const getShoppingRestaurants = ({
    latitude,
    longitude,
    offset = 0,
    limit = 20,
    restaurant_category_id,
    order_by,
    delivery_mode,
    support_ids,
    restaurant_category_ids,
}) => Axios.get(
    'shopping/restaurants', {
        params: {
            latitude,
            longitude,
            offset,
            limit,
            restaurant_category_id,
            order_by,
            delivery_mode,
            support_ids,
            restaurant_category_ids,
        }
    }
)

//餐馆种类
export const getResCategory= () => Axios.get(
    'shopping/v2/restaurant/category'
)

//餐馆详情
export const getRestaurantDetail = (id) => Axios.get(
    `/shopping/restaurant/${id}`
)

//店铺商品
export  const getShiopItem = (restaurant_id) => Axios.get(
    '/shopping/v2/menu',{
        params: {
            restaurant_id
        }
    }
)