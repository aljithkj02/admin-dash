let token = localStorage.getItem('token') || '';
let isAuth = (token) ? true : false;

let defaultData = {
    isAuth,
    token
}

const authReducer = (state = defaultData, action) => {
    if(action.type === 'LOGIN'){
        return {
            ...state,
            isAuth: true,
            token: action.payload
        }
    }else if(action.type === 'LOGOUT'){
        return {
            ...state,
            isAuth: false,
            token: '',
        }
    }
    return state;
}

export default authReducer;