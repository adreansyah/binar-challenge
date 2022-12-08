const initialState = {
    data: [],
    detail: null,
    loading: false,
    isTable: {
        name: "",
        category: "",
        isRented: "",
        minPrice: "",
        maxPrice: "",
        page: "",
        pageSize: 20
    },
    formState: {
        name: "",
        category: "",
        isRented: "",
        price: "",
        image: ""
    },
    lineChart: [],
    barChart: []
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
        case "REQUEST_GET_DATA_DETAIL":
            return {
                ...state,
            }
        case "GET_DATA_DETAIL":
            return {
                ...state,
                detail: action.payload,
                formState: {
                    name: action.payload.name,
                    category: action.payload.category,
                    isRented: action.payload.status,
                    price: action.payload.price,
                    image: action.payload.image
                }
            }
        case "LINE_CHART":
            return {
                ...state,
                lineChart: action.payload
            }
        case "BAR_CHART":
            return {
                ...state,
                barChart: action.payload
            }
        default:
            return {
                ...state
            }
    }
}