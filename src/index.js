import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Propos from './Pages/Propos/Propos';
import Error from './Pages/Error/Error';
import Houses from './Pages/Houses/Houses';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="propos" element={<Propos />} />
      <Route path="houses/:id" element={<Houses />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

