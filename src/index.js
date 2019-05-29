import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import App24 from './components/App24';

ReactDom.render(
    <App />, document.querySelector('#root')
);

ReactDom.render(
    <App24 />, document.querySelector('#root24')
);