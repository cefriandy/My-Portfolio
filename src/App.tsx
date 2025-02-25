import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import Loading from './loading/Loading';
import ScrollToTop from './components/scroll/ScrollToTop';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('About');
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header setActivePage={setActivePage} toggleTheme={toggleTheme} theme={theme} />
      <div className={`App ${theme}`}>
        <Home activePage={activePage} theme={theme} />
        <ScrollToTop />
      </div>
      <Footer />
    </Router>
  );
};

export default App;