
const initalState = {
    data: []
}

export const userData = (state = initalState, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
            return {
                ...state,
                data: action.payload
            }
        default:
            return {
                ...state
            }
    }
}