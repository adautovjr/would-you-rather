import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export default applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
);