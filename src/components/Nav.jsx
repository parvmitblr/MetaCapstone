import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

/**
 * Navigation Component
 * Provides navigation menu with mobile responsive toggle
 * Keyboard accessible and ARIA compliant
 */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    // Close menu on Escape key
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

    return (
      <>
      <button 
        className="mobile-nav" 
        onClick={toggleNav}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="navigation"
      >
        {isOpen ? <FaRegTimesCircle aria-hidden="true" /> : <FaGripLines aria-hidden="true" />}
      </button>
      <nav 
        id="navigation"
        className={`nav ${isOpen ? 'active' : ''}`} 
        role="navigation"
        aria-label="Main"
        onKeyDown={handleKeyDown}
      >
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>HOME</Link>
        <a href="#about" className="nav-item" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#menu" className="nav-item" onClick={() => setIsOpen(false)}>MENU</a>
        <Link to="/booking" className="nav-item" onClick={() => setIsOpen(false)}>RESERVATIONS</Link>
        <a href="#order" className="nav-item" onClick={() => setIsOpen(false)}>ORDER ONLINE</a>
        <a href="#login" className="nav-item" onClick={() => setIsOpen(false)}>LOGIN</a>
      </nav>
      </>
    )
  }
  

  