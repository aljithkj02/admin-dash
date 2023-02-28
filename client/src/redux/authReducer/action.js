
export const login = (token) => (dispatch, getState) => {
    localStorage.setItem('token', token);
    return dispatch({
        type: 'LOGIN',
        payload: token
    })
}

export const logout = (token) => (dispatch, getState) => {
    localStorage.removeItem('token');
    return dispatch({
        type: 'LOGOUT'
    })
}