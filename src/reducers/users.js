import { RECEIVE_USERS, UPDATE_USER_QUESTION, UPDATE_USER_ANSWER } from "../actions/users";

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER_QUESTION:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER_ANSWER:
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }
}