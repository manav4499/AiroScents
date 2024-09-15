import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-logo">AiroScents</h1>
        <ul>
          <li><Link className="link_white" to="/">Home</Link></li>
          <li><a className="link_white" href='https://manav4499.github.io/MappedIn-API/' target='blank'>Path</a></li>
          <li><Link className="link_white" to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}
