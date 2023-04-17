import React from 'react';
import { Routes, Route } from 'react-router';
import { Home, Dashboard } from '../../pages/';
export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
