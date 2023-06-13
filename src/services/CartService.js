import axios from "axios";

export const getCartItems = async (url, token, userId) => {
    return await axios.get(`${process.env.REACT_APP_CART_BASE_URL}` + url + `?userId=${userId}`, {
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}

export const addToCartItem = (url, token, userId, productId, boolIncrease) => {
    axios.post(`${process.env.REACT_APP_CART_BASE_URL}` + url, {
        userId,
        productId,
        boolIncrease
    },{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
} 