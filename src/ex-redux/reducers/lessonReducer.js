const initialState = {
    data: [],
    loading: false,
    formState: {
        name: "",
        category: "",
        isRented: "",
        minPrice: "",
        maxPrice: "",
        page: "",
        pageSize: ""
    }
}

export const dataList = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_GET_DATA":
            return {
                ...state,
                loading: true
            }
        case "GET_DATA":
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}