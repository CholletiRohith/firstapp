import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, Router, IndexRoute} from 'react-router';
// import {hashHistory} from 'react-router';
import './index.css';
import Toggle from './Toggle';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Form from './Form';
import Boil from './BoilingPoint';

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);
ReactDOM.render(
 
  
  <Form/>,
   
    document.getElementById('signup')
  );
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 