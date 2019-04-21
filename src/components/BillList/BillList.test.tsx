import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import BillList from './BillList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        (
            <Provider store={store}>
                <BillList/>
            </Provider>
        ),
        div);
    ReactDOM.unmountComponentAtNode(div);
});
