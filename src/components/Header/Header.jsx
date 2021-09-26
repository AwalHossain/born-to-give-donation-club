import React from 'react';
import './Header.css'
const Header = () => {
  // Navigation Bar & Website Name
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand cursive" href="/">Born To Give</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item ms-0">
                    <button className='btn '> <a class="nav-link active " aria-current="page" href="/">Sign Up</a></button>
                    </li>
                    <li class="nav-item ms-0">
                        <button className='btn '>  <a class="nav-link active " aria-current="page" href="/">Home</a></button>
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
        <h2 className="para-head">This month's approximate target is $1 million.</h2>
        <h3 className='head-bottom'>For a better world</h3>
        <h3>Let's help to make it up</h3>
        </div>
</div>
        </div>
    );
};

export default Header;