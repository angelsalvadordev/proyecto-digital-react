import React from 'react';
import ReactDOM from 'react-dom';
import Centralizer from './Centralizer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Centralizer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
