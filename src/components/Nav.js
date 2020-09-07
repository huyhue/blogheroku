import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div id="header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href=""><h3>HUYHUE BLOG</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto text-right">
          <li className="nav-item">
            <a className="nav-link active-home" href="/blog">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/code">CODE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/personals">EXPERIMENT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#review">TRAVEL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lienhe">CONTACT ME</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

    );
  }
}

export default Nav;