
const initalState = {
    counter: 0
}
export const counter = (state = initalState, action) => {
    switch (action.type) {
        case "REQUEST_COUNTER":
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}