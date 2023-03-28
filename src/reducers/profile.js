import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
} from '../actions/types';

const initialState = {
    username: '',
    email: ''
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER_PROFILE_SUCCESS:
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username: payload.username,
                email: payload.profile.email
            }
        case LOAD_USER_PROFILE_FAIL:
            return {
                ...state,
                username: '',
                email: ''
            }
        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    };
};