import { fetchApi } from "config/fethApi";

export const BarchartData = (state) => async (dispatch) => {
    try {
        const { data } = await fetchApi('admin/order/reports', {
            from: "2022-01-01",
            until: "2022-01-31"
        })
        dispatch({
            type: "BAR_CHART",
            payload: data.map(item => ({
                date: item.day,
                value: Math.floor(Math.random() * (1000000 - 200) + 1000)
            }))
        })
    } catch (error) {
        console.log(error.message);
    }

}