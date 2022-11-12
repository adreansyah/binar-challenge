import axios from "axios"
import { TOKEN, url } from "./authoritize"

export const fetcApi = (params) => {
    return axios.get(url + 'admin/v2/car', {
        params: {
            ...params,
        },
        headers: {
            access_token: `${TOKEN}`,
            "content-type": "application/json"
        }
    })
}

export const fetchApi = ((endpoint, params) => {
    return axios.get(url + endpoint, {
        params: {
            ...params,
        },
        headers: {
            access_token: `${TOKEN}`,
            "content-type": "application/json"
        }
    })
})

export const postApi = ((endpoint, params) => {
    return axios.post(url + endpoint, {
        ...params
    }, {
        headers: {
            access_token: `${TOKEN}`,
            "Content-Type": "multipart/form-data"
        }
    })
})

export const putApi = ((endpoint, params) => {
    return axios.put(url + endpoint, {
        ...params
    }, {
        headers: {
            access_token: `${TOKEN}`,
            "Content-Type": "multipart/form-data"
        }
    })
})

export const deleteApi = ((endpoint, params) => {
    return axios.delete(url + endpoint, {
        headers: {
            access_token: `${TOKEN}`,
            "Content-Type": "multipart/form-data"
        }
    })
})