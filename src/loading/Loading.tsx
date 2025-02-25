import React from 'react';
import CLogo from '../CLogo.png';
import './Loading.css';

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <img src={CLogo} alt="Loading Logo" className="loading-logo" />
        </div>
    );
};

export default Loading;