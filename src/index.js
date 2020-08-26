import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import HomeText from './components/HomeText';
import * as serviceWorker from './serviceWorker';
import Features from "./components/Features";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <HomeText/>
        <Features/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
