import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <header className="App">

<div class="container-fluid">



  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="">Tindog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Download</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
    </header>
  );
}

export default Header;
