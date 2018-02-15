import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorld from './HelloWorld.js';

//ReactDOM.render(<App />, document.getElementById('root'));
 ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
registerServiceWorker();
