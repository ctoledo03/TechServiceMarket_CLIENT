// src/pages/GettingStarted.js
import React from 'react';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <div>
        <h1>Welcome to Tech Services Market</h1>
        <p>
            Tech Services Market was created to address the challenges recent graduates face when trying to enter the tech industry. With a rapidly growing number of new software developers entering the job market, it has become increasingly difficult for graduates to find opportunities that provide the hands-on experience needed to meet industry standards. Our platform is designed to bridge the gap between academic knowledge and practical skills by connecting graduates with real-world projects and opportunities. By using TechServicesMarket, graduates can gain relevant experience, build their portfolios, and enhance their employability in the competitive job market.
        </p>

        <Link to="/login"><button>Go to Login</button></Link>
        <Link to="/register"><button>Go to Registration</button></Link>
        </div>
  );
};

export default GettingStarted;
