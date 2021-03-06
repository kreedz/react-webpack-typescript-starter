import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import App from 'components/App';
import configureStore from 'store';


const rootEl = document.getElementById('root');
const store = configureStore();
const renderApp = () =>
    render(
        <Provider store={store}>
            <AppContainer>
                <App/>
            </AppContainer>
        </Provider>,
        rootEl
    );

renderApp();

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./components/App', () => {
        unmountComponentAtNode(rootEl);
        renderApp();
    });
}
