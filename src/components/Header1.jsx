import React, { useState, useEffect } from 'react';
import './Header1.css';
import Logo from '../assets/Group.png';
import { NavLink } from 'react-router-dom';

const Header1 = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div className="container bg-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={show}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${show ? 'navbar-collapse show' : 'collapse navbar-collapse'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" onClick={handleToggle}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={handleToggle}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing" onClick={handleToggle}>
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/featuers" onClick={handleToggle}>
                  Features
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-dark btn-sm py-2 px-4">Download</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header1;
