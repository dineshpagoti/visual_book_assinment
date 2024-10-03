// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/my-library" element={<MyLibraryPage />} />

      </Routes>
    </Router>
  );
};

export default App;
