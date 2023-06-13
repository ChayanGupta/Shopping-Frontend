import axios from "axios"

export const login_user = async (url, data) => {
    return await axios.post(`${process.env.REACT_APP_USER_BASE_URL}` + url, data);
}

export const register_user = async (url, data) => {
    return await axios.post(`${process.env.REACT_APP_USER_BASE_URL}` + url, data);
}