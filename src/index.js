import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard';
import Spells from './components/spells';
import InitalLogin from './components/inital-login';
import SpellEntry from './components/spell-entry.jsx';
import ToLearn from './components/to-learn';
import Potions from './components/potions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/" element={<InitalLogin/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="spells" element={<Spells/>} />
        <Route path="/:spell" element={<SpellEntry/>} /> 
        <Route path="/potions" element={<Potions/>} />
        <Route path="/to-learn" element={<ToLearn/>} />
        </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
