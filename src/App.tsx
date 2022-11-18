import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { FeedPage } from './pages/Feed';
import { PostRegister } from './pages/PostRegiter';

function App() {
  return (
    
      <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<FeedPage title="Feed" />} />
              <Route path="/poste-regiter" element={<PostRegister />} />
            </Routes>
          </MainLayout>
      </BrowserRouter>
    
  );
}

export default App;
