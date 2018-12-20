// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

// COMPONENTS

import App from './components/App';

// STYLES

import 'normalize.css';
import './styles/app.css';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);