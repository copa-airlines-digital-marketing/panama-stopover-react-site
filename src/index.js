import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router} from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import * as serviceWorker from './serviceWorker';
import rootReducer from "store/reducers";
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/BookingPanel/theme';

import App from "App";
import ScrollToTop from "./components/ScrollToTop";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, devToolsEnhancer({}));
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <ScrollToTop>
                        <App/>
                    </ScrollToTop>
                </Router>
            </PersistGate>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
