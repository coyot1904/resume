import { SET_USER_NAME, SET_USER_AGE, GET_CITIES , SET_USER_PHONE , SET_USER_EMAIL } from './actions';

const initialState = {
    name: '',
    age: 0,
    cities: '',
    phone : '21111',
    email : ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_USER_AGE:
            return { ...state, age: action.payload };
        case GET_CITIES:
            return { ...state, cities: action.payload };
        case SET_USER_PHONE:
            return { ...state, phone: action.payload };
        case SET_USER_EMAIL:
            return { ...state, email: action.payload };
        default:
            return state;
    }
}

export default userReducer;