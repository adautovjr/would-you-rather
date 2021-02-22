import { showLoading, hideLoading } from "react-redux-loading";
import { push } from 'connected-react-router';
import { getInitialData } from '../utils/api';
import { receiveQuestions } from "../actions/questions";
import { receiveUsers, setAuthedUser } from "../actions/users";

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            });
    }
}

export function logUserIn (userId) {
    return (dispatch) => {
        dispatch(setAuthedUser(userId));
    }
}

export function logout () {
    return (dispatch) => {
        dispatch(setAuthedUser(false));
        setTimeout(() => dispatch(push(`/`)), 200);
    }
}