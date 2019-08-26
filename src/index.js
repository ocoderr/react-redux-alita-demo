import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AlitaProvider, setConfig} from 'redux-alita';
import apis from './apis';

setConfig(apis);

ReactDOM.render(<AlitaProvider>
        <App/>
    </AlitaProvider>
    , document.getElementById('root'));


