import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './allStyle.css';
import App from './App';
import Title from './Components/Title';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
