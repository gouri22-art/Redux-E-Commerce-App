const initailCartState = {
    items: []
}
export const cartReducer = (state = initailCartState, action) => {

    switch (action.type) {

        case "ADD_TO_CART":
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        case "PLACE_ORDER":
            return { ...state, items: [] };
        default:
            return state;
    }


};