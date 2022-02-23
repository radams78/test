import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Help } from './Help';
import { HomePage } from './HomePage';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="task" element={<App />}>
          <Route path="instructions" element={<p>Click a task</p>} />
        </Route>
        <Route path="help" element={<Help />} />
      </Route>      
    </Routes>
  </BrowserRouter>
</React.StrictMode>

ReactDOM.render(rootElement,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
