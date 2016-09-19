import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Contact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Person />, div);
});
