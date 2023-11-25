import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Navbar from './nav';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  registerFunction() {
    alert("call");

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const form = new FormData();
    form.append("name", username);
    form.append("email", email);
    form.append("password", password);
    // console.log(form);

    const jsonObject = {};
    form.forEach((value, key) => {
      jsonObject[key] = value;
    });
    console.log(jsonObject);
    let status;
    axios
      .post("http://localhost:5000/register", jsonObject, {
        headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            "response-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        var data = response.data;
        // document.cookie = `userid=${response.data.result[0].id}`;
        // var cookies = this.getCookie("userid");
        // console.log(cookies);
        // Handle the response as needed
        // status = response.data.status;
        // if (status === 700) {
        //   console.log("status is", status);
        //   window.location.href = "/home";
        // }
      })
      .catch((error) => {
        console.error("Error calling API:", error);
        // Handle the error as needed
      });
  }
  render() {
    return (
      <>
        <div className="container-md">
          <div className="row vh-100 d-flex justify-content-center">
            <div className="col-12 align-self-center">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 mx-auto">
                    <div className="card">
                      <div className="card-body p-0">
                        <div className="text-center p-3">
                          <a className="logo logo-admin">
                            <h1> My Stock</h1>
                          </a>
                          {/* <h4 className="mt-3 mb-1 fw-semibold font-18">
                            Let's Get Started Bullkit
                          </h4>
                          <p className="text-muted  mb-0">
                            Sign in to continue to Bullkit.
                          </p> */}
                        </div>
                      </div>
                      <hr className="hr-dashed" />
                      <div className="card-body pt-0">
                        <form
                          className="mb-4"
                          action="https://mannatthemes.com/bullkit/default/index.html"
                        >
                          <div className="form-group mb-2">
                            <label className="form-label" for="username">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              placeholder="Enter username"
                            />
                          </div>

                          <div className="form-group mb-2">
                            <label className="form-label" for="useremail">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="user email"
                              placeholder="Enter email"
                            />
                          </div>

                          <div className="form-group mb-2">
                            <label className="form-label" for="userpassword">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Enter password"
                            />
                          </div>

                          <div className="form-group mb-2">
                            <label className="form-label" for="Confirmpassword">
                              ConfirmPassword
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="Confirmpassword"
                              placeholder="Enter Confirm password"
                            />
                          </div>

                          <div className="form-group mb-2">
                            <label className="form-label" for="mobileNo">
                              Mobile Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="mobileNo"
                              name="mobile number"
                              placeholder="Enter Mobile Number"
                            />
                          </div>

                          <div className="form-group mb-0 row">
                            <div className="col-12">
                              <div className="d-grid mt-3">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => this.registerFunction()}
                                >
                                  Resister
                                  <i className="fas fa-sign-in-alt ms-1"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="m-3 text-center text-muted">
                          <p className="mb-0">
                            Already have an account ?{" "}
                            <Link
                              to="/login"
                              className="text-primary ms-2"
                            >
                              Log in
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
