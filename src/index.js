import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';

import Error404 from './components/Error404';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}> </Route>
        <Route path="/about" component={About}></Route>
        <Route path="/app" component={App} > </Route> 
        <Route path="*" component={Error404}> </Route>        
    </Router>, document.getElementById('root'));
registerServiceWorker();
