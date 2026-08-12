import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './components/Home';
import StudentsSection from './components/StudentsSection';
import ResourcesSection from './components/ResourcesSection';
import AdminHub from './components/AdminHub';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentsSection />} />
          <Route path="/resources" element={<ResourcesSection />} />
          <Route path="/admin" element={<AdminHub />} />
          {/* Fallback route back to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
