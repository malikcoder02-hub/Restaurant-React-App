import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/common/header';
import Homepage from './components/pages/homepage';
import ContactUs from './components/pages/contact_us';


function App() {


  return (
    <>
    <HashRouter>
      {/* <Router> */}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/book-table" element={<BookTable />} /> */}
        </Routes>
      {/* </Router> */}
      </HashRouter>
    </>
  );
}

export default App
