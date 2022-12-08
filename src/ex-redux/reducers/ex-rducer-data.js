
const initalState = {
    data: [],
    detail: null,
    formState: {
        "name": "",
        "category": "",
        "price": "",
        "status": false,
        "image": null
    }
}

export const userData = (state = initalState, action) => {
    switch (action.type) {
        case "REQUEST_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "LIST_DATA_API_BY_ID":
            return {
                ...state,
                detail: action.payload,
                formState: {
                    ...state.formState,
                    ...action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}