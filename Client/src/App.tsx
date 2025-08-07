import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SummarizePage from './pages/SummarizePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summarize" element={<SummarizePage />} />
      </Routes>
    </Router>
  );
}

export default App;