import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import CLogo from '../../CLogo.png';

interface HeaderProps {
  setActivePage: (page: string) => void;
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ setActivePage, toggleTheme, theme }) => {
  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" className="header-navbar fixed-top">
      <Navbar.Brand href="/" className="ml-3 brand-padding">
        <img src={CLogo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" end onClick={() => setActivePage('About')}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={() => setActivePage('About')}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" onClick={() => setActivePage('Projects')}>
            Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/experience" onClick={() => setActivePage('Experiences')}>
            Experiences
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={() => setActivePage('Contact')}>
            Contact
          </Nav.Link>
          <div className="theme-switch-button">
            <FontAwesomeIcon icon={faSun} className={`icon ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`} />
            <Form.Check
              type="switch"
              id="theme-switch"
              label=""
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <FontAwesomeIcon icon={faMoon} className={`icon ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
