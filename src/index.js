import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Centralizer from './Centralizer';

ReactDOM.render(<Centralizer />, document.getElementById('root'));

serviceWorker.unregister();
