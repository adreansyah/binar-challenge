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