const initailProductsState = {
    products: [],
    loading: false,
    error: null
};

export const productReducer = (state = initailProductsState, action) => {
    switch (action.type) {

        case "FETCH_PRODUCTS_REQUEST":
            return { ...state, loading: true };
        case "FETCH_PRODUCTS_SUCCESS":
            return {...state, loading: false, products: action.payload};
        case "FETCH_PRODUCTS_FAILURE":
            return {...state, loading:false, error: action.payload};
        default:
            return state;

    }


};
