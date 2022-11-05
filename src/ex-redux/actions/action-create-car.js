import { fetchApi, postApi } from "config/fethApi";

export const requestCreateCar = ({ value }) => async (dispatch) => {
    console.log(value);
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

export const requestListCar = () => async (dispatch) => {
    try {
        const { data } = await fetchApi('admin/v2/car')
        dispatch({
            type: "LIST_DATA_API",
            payload: []
        })
    } catch (error) {
        console.log(error.message);
    }
}