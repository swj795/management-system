import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/reset.css'
import './assets/styles/base.scss'
// 引入antd的样式
import 'antd/dist/antd.css';



ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

