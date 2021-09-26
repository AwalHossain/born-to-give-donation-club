import React from 'react';
import './Header.css'
const Header = () => {
  // Navigation Bar & Website Name
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand cursive" href="/">Born To Give</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item ms-0">
                    <button className='btn '> <a className="nav-link active " aria-current="page" href="/">Sign Up</a></button>
                    </li>
                    <li className="nav-item ms-0">
                        <button className='btn '>  <a className="nav-link active " aria-current="page" href="/">Home</a></button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
<div className='shadow'>
  {/* Here i use jumbotron for background-image purpose */}
<div className='jumbotron '>
</div>
{/* This section is for Estimate donation on and some motive sentence on banckground image */}
<div className='title-part container'>
        <h1 className='head'>Donate</h1>
        <h2 className="para-head">This month's approximate target is <span className='color'>$1 million</span></h2>
        <h3 className='head-bottom'>To make the world a better place</h3>
        <h3>Let's work together to make things right.</h3>
        </div>
</div>
        </div>
    );
};

export default Header;