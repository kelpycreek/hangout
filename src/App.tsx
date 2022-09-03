import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Faq from './pages/Faq/Faq';
import Calendar from './pages/Calendar/Calendar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}