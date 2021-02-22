import { SET_AUTHED_USER } from '../actions/users';

export default function authedUser (state = false, action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.id
        default :
            return state
    }
}