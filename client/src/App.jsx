import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="navbar">
        <div> R I F F   R E A L M </div>
        <div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>

      <div className="container">
        <div className="slogan">
          <h1>Your Go-to Harmony-Hub</h1>
        </div>
        <div className="background-image"></div>
      </div>

      <div className="footer">
        <div>Subscribe to our newsletter for updates:</div>
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default App;