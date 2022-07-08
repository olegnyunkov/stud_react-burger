export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (data) => {
    return {type: ADD_USER, payload: data}
}

export const removeUser = () => {
    return {type: REMOVE_USER}
}