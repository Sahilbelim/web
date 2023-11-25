import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
export default class Login extends Component {
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
  loginFinction() {
    alert("call");
   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    // console.log(form);

    const jsonObject = {};
    form.forEach((value, key) => {
      jsonObject[key] = value;
    });
    console.log(jsonObject);
    let status;
      const handleSubmit = async (data) => {
       
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result);
      };
    // axios
    //   .post("http://localhost:5000/login", jsonObject, {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       "response-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     var data = response.data;
    //     // document.cookie = `userid=${response.data.result[0].id}`;
    //     // var cookies = this.getCookie("userid");
    //     // console.log(cookies);
    //     // Handle the response as needed
    //     // status = response.data.status;
    //     // if (status === 700) {
    //     //   console.log("status is", status);
    //     //   window.location.href = "/home";
    //     // }
    //   })
    //   .catch((error) => {
    //     console.error("Error calling API:", error);
    //     // Handle the error as needed
    //   });
    handleSubmit(jsonObject);
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
                          <a  className="logo logo-admin">
                            <h1> My Stock</h1>
                          </a>
                        </div>
                      </div>
                      <hr className="hr-dashed" />
                      <div className="card-body pt-0">
                        <form className="mb-4">
                          <div className="form-group mb-2">
                            <label className="form-label" htmlFor="username">
                              Enter email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="username"
                              placeholder="Enter email"
                            />
                          </div>

                          <div className="form-group">
                            <label
                              className="form-label"
                              htmlFor="userpassword"
                            >
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

                          <div className="form-group mb-0 row">
                            <div className="col-12">
                              <div className="d-grid mt-3">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => this.loginFinction()}
                                >
                                  Log In
                                  <i className="fas fa-sign-in-alt ms-1"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div className="m-3 text-center text-muted">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <Link to="/register" className="text-primary ms-2">
                              Free Resister
                            </Link>
                          </p>
                        </div>
                        <hr className="hr-dashed mt-4" />
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
