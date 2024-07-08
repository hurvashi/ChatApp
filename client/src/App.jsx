import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};