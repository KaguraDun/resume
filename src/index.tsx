import './styles/index.scss';

import App from '@/components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router> 
      <App />
    </Router>,
  document.getElementById('root')
);
