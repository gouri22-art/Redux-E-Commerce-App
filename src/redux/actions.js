export const fetchProducts = () => {

    return async dispatch => {
        dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });

        } catch (error) {
            dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
        }
    };
};

export const addToCart = product => ({ type: "ADD_TO_CART", payload: product });
export const removeFromCart = id => ({ type: "REMOVE_FROM_CART", payload: { id } });
export const updateQuantity = (id, quantity) => ({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
export const placeOrder = () => ({ type: "PLACE_ORDER" });