export const requestAddNumber = () => (dispatch, getState) => {
    const { counter } = getState().counter
    dispatch({
        type: "REQUEST_COUNTER",
        payload: {
            counter: counter + 1
        }
    })
}

export const requestReduceNumber = () => (dispatch, getState) => {
    const { counter } = getState().counter
    dispatch({
        type: "REQUEST_COUNTER",
        payload: {
            counter: counter - 1
        }
    })
}