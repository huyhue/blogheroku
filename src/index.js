import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/blog.css';
import App from './components/App';
import store from './components/store.js'
import store1 from './components/noteApp/store1.js'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store,store1} >
        <App />
    </Provider>, document.getElementById('root')); 
registerServiceWorker();
