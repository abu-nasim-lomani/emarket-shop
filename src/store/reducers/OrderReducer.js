const initState = {
    
}

const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CONFIRM_ORDER':
            const { customerOrderInformation } = action.payload;
            return { ...state, customerOrderInformation: customerOrderInformation }
        
        default:
            return state;
    }
}
export default OrderReducer;