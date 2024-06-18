import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import React, { useState } from 'react';
import LoginModal from './LoginModal.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
    
    <Router>
        <Routes>
          <Route path="/request-equipment/:equip_unique_key"  />
        </Routes>
      </Router>
      <Header />
      <LoginModal show={showModal} onClose={closeModal} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
