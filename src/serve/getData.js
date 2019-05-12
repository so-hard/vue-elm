import Axios from '../extend/axios'



export const login = (username, password, captcha_code) => Axios.post(
    'v2/login',
    {
        username,
        password,
        captcha_code
    }
)


export const getCaptchas = () => Axios.post('v1/captchas');

export const signOut = () =>  Axios.get('v2/signout')

export const getOrder = (user_id,limit,offset) => Axios.get(
    `bos/v2/users/${user_id}/orders`,
    {
        params:{
            limit,
            offset
        }
    }
)



export const getCity = () => Axios.get(
    'v1/cities',{
        params:{
            type: 'hot'
        }
    }   
)