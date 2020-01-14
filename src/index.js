import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { GlobalStateProvider } from './_Context';

const RootWithRouter = withRouter(App);

ReactDOM.render(
    <GlobalStateProvider>
        <Router><RootWithRouter/></Router>
    </GlobalStateProvider>, 
document.getElementById('root'));

