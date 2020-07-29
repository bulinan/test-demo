import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {ConfigProvider} from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import zhCN from 'antd/es/locale/zh_CN';
import '@/assets/css/index.css';


ReactDOM.render(
   <ConfigProvider locale={zhCN}>
     <Provider store={store}>
      <Router />
    </Provider>
   </ConfigProvider>,
  document.getElementById('root')
);
