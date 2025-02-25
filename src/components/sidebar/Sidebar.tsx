import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar text-white ${isOpen ? 'open' : ''}`}>
      <button className="close-btn btn btn-dark" onClick={toggleSidebar}>×</button>
      <nav className="nav flex-column">
        <a className="nav-link text-white" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Services</a>
        <a className="nav-link text-white" href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;