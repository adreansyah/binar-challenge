import { fetcApi } from "config/fethApi"

export const requestData = () => async (dispatch, getState) => {
    const { data } = await fetcApi()
    dispatch({
        type: "REQUEST_DATA",
        payload: data.cars
    })
}