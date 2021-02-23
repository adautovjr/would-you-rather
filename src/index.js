import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import createRootReducer from './reducers';
import middleware, { history } from './middleware';
export const store = createStore(createRootReducer(history), middleware);

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>,
    document.getElementById('root')
);
