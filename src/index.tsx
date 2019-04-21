import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(app, document.getElementById('root'));
