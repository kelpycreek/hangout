import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Faq from './pages/Faq/Faq';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}