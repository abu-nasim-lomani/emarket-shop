const initState = {
    user: {}
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const { user } = action.payload;
            return { ...state, user: user }
        
        default:
            return state;
    }
}
export default AuthReducer;