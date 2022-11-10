import { fetchApi, postApi } from "config/fethApi";

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

export const requestPOST = ({ value }) => async (dispatch) => {
    try {
        await postApi('admin/car', {
            ...value
        })
        dispatch({
            type: "MOCK_UP_API",
            payload: []
        })
    } catch (error) {
        console.log(error.message);
    }
}