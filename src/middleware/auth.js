import { push } from 'connected-react-router';
const LOCATION_CHANGE = "@@router/LOCATION_CHANGE";
const ADD_QUESTION = "ADD_QUESTION";

const actionsRequiringUserLoggedIn = [
    LOCATION_CHANGE,
    ADD_QUESTION
];

const unprotectedRoutes = [
    "/",
    "/login"
];

const auth = (store) => (next) => (action) => {
    const authedUser = store.getState().authedUser;
    const userLoggedIn = typeof authedUser === typeof "";

    let returnValue = null;
    if (!userLoggedIn) {
        if (actionsRequiringUserLoggedIn.includes(action.type)) {
            switch (action.type) {
                case LOCATION_CHANGE:
                    if (!unprotectedRoutes.includes(action.payload.location.pathname)) {
                        console.error("Permission denied! Redirecting to login..");
                        setTimeout(() => {
                            store.dispatch(push(`/login?redirectRoute=${action.payload.location.pathname}`));
                        }, 10);
                        return returnValue;
                    }
                    break;
                default:
                    setTimeout(() => {
                        store.dispatch(push(`/login`));
                    }, 10);
                    return returnValue;
            }
        }
    } else {
        // TODO: Check permissions for this user
    }
    returnValue = next(action);
    return returnValue;
}

export default auth;