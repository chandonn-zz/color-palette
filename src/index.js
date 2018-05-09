import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorPalette from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorPalette />, document.getElementById('root'));
registerServiceWorker();
