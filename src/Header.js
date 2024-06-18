import React, { useState, useEffect } from 'react';
import logo from './img/svcc_log2.png';
import { scrollToSection } from './custom-code.js';
import LoginModal from './LoginModal.js';
import Register from './Register.js';


function Header() {
  const [showModal, setShowModal] = useState(null);
  const [showRegister, setShowRegister] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


/*useEffect(() => {
    const fetchLoginStatus = async () => {
      const loggedIn = await checkLogIn();
      console.log('Login status:', loggedIn);
      setIsLoggedIn(loggedIn);
    };

    fetchLoginStatus();
  }, []);*/


  useEffect(() => {
    const isLoggedInLocally = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedInLocally === 'true');
  }, []);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleRegisterClick = () => {
    scrollToSection('banner');
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function showLoginForm() {
    scrollToSection('banner');
    handleLoginClick();
  }

  const handleLogoutClick = async () => {
    setIsLoggedIn(false);
    try {
      const response = await fetch('http://localhost:5000/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to submit form: ${errorData.message}`);
      }
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('student_number');
      window.location.reload();
    } catch (error) {
      alert(error.message);
      console.log(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (showModal || showRegister) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showModal, showRegister]);

  return (
    <div id='header-wrapper'>
      <header id="header">
        <div className="flex-space-wrap-center">
          <img src={logo} alt="Logo" />
          <ul className="flex-space-wrap-center">
            <li>
              <p>
                <a onClick={() => scrollToSection('banner')}>
                  HOME
                </a>
              </p>
            </li>
            <li>
              <p>
                <a onClick={() => scrollToSection('about')}>
                  ABOUT THE SYSTEM
                </a>
              </p>
            </li>
            <li>
              <p>
                <a onClick={() => scrollToSection('instructions')}>
                  HOW IT WORKS?
                </a>
              </p>
            </li>
            <li>
              <p>
                <a onClick={() => scrollToSection('teams')}>
                  TEAM
                </a>
              </p>
            </li>
            {isLoggedIn ? (
              <li>
                <p>
                  <a onClick={handleLogoutClick}>
                    LOGOUT
                  </a>
                </p>
              </li>
            ) : (
              <>
                <li>
                  <p>
                    <a onClick={handleRegisterClick}>
                      REGISTER
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a onClick={showLoginForm}>
                      LOGIN
                    </a>
                  </p>
                </li>
              </>
            )}
          </ul>
          <button onClick={() => scrollToSection('items')}>BORROW NOW</button>
        </div>
      </header>
      <LoginModal show={showModal} onClose={handleCloseModal} />
      <Register show={showRegister} onClose={handleCloseRegister} />
    </div>
  );
}

export default Header;
