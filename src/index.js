import React from 'react';
import ReactDOM from 'react-dom';

// Css
import './assets/css/index.css';

// Pages
import MainApp from './components/pages/MainApp';

const root = document.getElementById('root')
const element = <MainApp />

ReactDOM.render(element, root);

