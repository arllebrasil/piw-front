import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FeedPage } from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedPage title="Feed" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
