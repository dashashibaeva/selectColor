import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {PopUpSettings} from "./components/IndexPopUp";
// import {MoreSettings} from "./components/Setting";

export const root = document.getElementById('root');
root.className="screenCenter flex";

ReactDOM.render(
  <React.StrictMode>
      <App />
      {/*<PopUpSettings/>*/}
      {/*<MoreSettings/>*/}

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
