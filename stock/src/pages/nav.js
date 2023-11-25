import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light  bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <Link class="navbar-brand px-5" to="/" width="100%">
            <h1> My Stock</h1>
            {/* <img src="./stock/assets/images/users/logo.jpg" alt=""  className="img-fluid" width="10%"/> */}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">
                  Blog 
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Top Company
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/topgain/AAPL">
                      Top Gain Company
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/toplose/AAPL">
                      Top lose Company
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/fullgrapg/AAPL">
                      Full Chart only
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex">
              <button className="btn btn-lignt border me-3">
                <Link to="/login" className="p-3">
                  Login
                </Link>
              </button>
              <button className="btn btn-primary mx-3">
                <Link to="/register" className="text-light p-2">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
