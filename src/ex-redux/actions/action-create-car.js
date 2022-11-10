import { deleteApi, fetchApi, postApi } from "config/fethApi";

export const requestCreateCar = ({ value }) => async (dispatch) => {
    console.log("IN ACTION : ", value);
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

export const requestListCarById = ({ id = null }) => async (dispatch) => {
    try {
        const { data } = await fetchApi(`admin/car/${id}`)
        dispatch({
            type: "LIST_DATA_API_BY_ID",
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
}


export const requestDeleteListCar = ({ id }) => async dispatch => {
    try {
        await deleteApi(`admin/car/${id}`)
        dispatch({
            type: "DELETE_SUCCESS"
        })
    }
    catch (error) {
        console.log(error.message);
    }
}