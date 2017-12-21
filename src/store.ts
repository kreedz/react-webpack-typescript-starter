import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Hot Module Replacement API
declare let module: { hot: any };

const configureStore = () => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./reducers', () => {
                store.replaceReducer(reducers);
            });
        }
    }

    return store;
};

export default configureStore;
