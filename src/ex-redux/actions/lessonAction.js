import { fetchApi } from "config/fethApi";

export const requestApiGET = ({ state }) => async (dispatch) => {
    dispatch({ type: "REQUEST_GET_DATA" })
    try {
        const { data } = await fetchApi('admin/v2/car', state)
        dispatch({
            type: "GET_DATA",
            payload: data.cars
        })
    } catch (error) {
        console.log(error.message);
    }
}