import axios from "axios"

export const getAllProducts = async (url) => {
    return await axios.get(`${process.env.REACT_APP_PRODUCT_BASE_URL}` + url);
}

export const searchProducts = async (url, keyword) => {
    return await axios.get(`${process.env.REACT_APP_PRODUCT_BASE_URL}` + url + `?keyword=${keyword}`)
}