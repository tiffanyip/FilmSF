import React from 'react';
import { browserHistory } from 'react-router';

function NavBar() {
  return (
    <nav id="customNav">
      <a href="/" className="brand-logo center">
        <img
          role="presentation"
          src="../assets/video-camera.png"
          height="50px"
          width="50px"
          onClick={() => { browserHistory.push('/'); }}
        />
        <h4>Film SF</h4>
      </a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/map">Map</a></li>
        <li><a href="/movies">List</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
