import React, { Component } from "react";

import Tgain from "./Tgain";
import Tlose from "./Tlose";
import TradingViewWidget from "./TradingView";
import Navbar from "./nav";

export default class Home extends Component {
  toggleMenu() {
    document.getElementById("mobileToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <div className="page-content-tab">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-3 mt-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="row d-flex justify-content-center mb-2">
                            <div className="col">
                              <p className="text-dark mb-0 fw-semibold">
                                User Name 
                              </p>
                              <h3 className="my-1 font-20 fw-bold">Arman </h3>
                            </div>
                            <div className="col-auto align-self-center">
                              <img
                                src="./stock/assets/images/ipo/money.png"
                                className="thumb-lg"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <div className="row align-items-center">
                            <div className="col">
                              <h4 className="card-title">New company </h4>
                            </div>
                            <div className="col-auto">
                              <span className="stocks-list-badge bg-soft-primary ms-1">
                                3
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            id="IPO_Carousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div className="carousel-item ">
                                <div className="text-center">
                                  <img
                                    src="./stock/assets/images/ipo/ipo-3.png"
                                    className="thumb-lg"
                                    alt="..."
                                  />
                                  <h3 className="my-1 font-20 fw-bold">
                                    Life's Good
                                  </h3>
                                  <p className="mb-0 fw-semibold">
                                    Nov 21, 2023 to Nov 24, 2023
                                  </p>
                                  <p className="mb-2">
                                    Allotment :{" "}
                                    <span className="text-muted">
                                      Nov 24, 2021
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="carousel-item active">
                                <div className="text-center">
                                  <img
                                    src="./stock/assets/images/ipo/ipo-1.png"
                                    className="thumb-lg"
                                    alt="..."
                                  />
                                  <h3 className="my-1 font-20 fw-bold">
                                    Starbucks
                                  </h3>
                                  <p className="mb-0 fw-semibold">
                                    Nov 21, 2023 to Nov 24, 2023
                                  </p>
                                  <p className="mb-2">
                                    Allotment :{" "}
                                    <span className="text-muted">
                                      Sep 08, 2021
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="text-center">
                                  <img
                                    src="./stock/assets/images/ipo/ipo-2.png"
                                    className="thumb-lg"
                                    alt="..."
                                  />
                                  <h3 className="my-1 font-20 fw-bold">
                                    McDonald's
                                  </h3>
                                  <p className="mb-0 fw-semibold">
                                    Sep 06, 2021 to Sep 10, 2021
                                  </p>
                                  <p className="mb-2">
                                    Allotment :{" "}
                                    <span className="text-muted">
                                      Sep 14, 2021
                                    </span>
                                  </p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-12">
                      <TradingViewWidget height={500} width={980} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12"></div>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-lg-6">
                  <Tgain />
                </div>
                <div className="col-lg-6">
                  <Tlose />
                </div>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="Appearance"
              aria-labelledby="AppearanceLabel"
            >
              <div className="offcanvas-body">
                <button
                  type="button"
                  className="btn-close text-reset p-0 m-0 align-self-center float-end"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                <div className="media">
                  <div
                    className="ipo_logo d-inline-block"
                    style={{
                      height: "70px",
                      width: "90px",
                      lineHeight: "68px",
                    }}
                  >
                    <img
                      src="./stock/assets/images/ipo/ipo-1.png"
                      alt=""
                      className=""
                      height="36"
                    />
                  </div>
                  <div className="media-body align-self-center ms-2">
                    <h5 className="fw-semibold mt-0 font-16 mb-1">
                      Registered Clients
                    </h5>
                    <p className="text-success mb-0 font-12">
                      Application Successful
                    </p>
                  </div>
                </div>
                <hr className="hr-dashed" />
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Applic. No
                    <span className="font-12 fw-semibold">236568546</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Amount to be Blocked
                    <span className="font-12 fw-semibold">$250.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Bid
                    <span className="font-12 fw-semibold">01</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Market Lot
                    <span className="font-12 fw-semibold">40 Shares</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Price
                    <span className="font-12 fw-semibold">$25.00</span>
                  </li>
                </ul>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    IPO Open Date
                    <span className="font-12 fw-semibold">14/09/2021</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Allotment Date
                    <span className="font-12 fw-semibold">18/09/2021</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Refunds
                    <span className="font-12 fw-semibold">19/09/2021</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Credit Demat Ac.
                    <span className="font-12 fw-semibold">20/09/2021</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    IPO Listing Date
                    <span className="font-12 fw-semibold">21/09/2021</span>
                  </li>
                </ul>
                <p className="p-2 bg-soft-info rounded font-15 fw-semibold">
                  Upcoming IPOs 2021
                </p>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" className="text-end">
                        Size
                      </th>
                      <th scope="col" className="text-end">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href="https://mannatthemes.com/bullkit/ipo.html"
                          className="text-dark"
                        >
                          Apple{" "}
                          <span className="text-muted font-10">NASDAQ</span>
                        </a>
                      </td>
                      <td className="text-end">2542cr.</td>
                      <td className="text-end">12 Nov.2021</td>
                    </tr>
                    <tr>
                      <td>
                        <a href="https://mannatthemes.com/bullkit/ipo.html">
                          Panasonic
                        </a>
                      </td>
                      <td className="text-end">1302cr.</td>
                      <td className="text-end">18 Nov.2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="BuyStocks"
          tabindex="-1"
          aria-labelledby="BuyStocksLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h6 className="modal-title m-0 mb-n1" id="BuyStocksLabel">
                    Apple Inc
                  </h6>
                  <span className="font-10 d-block mb-1">nasdaq</span>
                  <span className="border border-success px-1 rounded text-success">
                    B
                  </span>
                </div>
                <div>
                  <h6 className="m-0 text-uppercase font-16 fw-bold">
                    $147.95 <i className="ti ti-trending-down text-danger"></i>
                  </h6>
                  <div className="d-inline-block font-10">
                    <span className="text-danger">-110.60</span>{" "}
                    <span className="text-danger">(30.52%)</span>
                  </div>
                  <div className="text-success">
                    Live{" "}
                    <span>
                      <i className="las la-dot-circle"></i>
                    </span>
                  </div>
                </div>
                {/* <!-- <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> --> */}
              </div>

              <div className="modal-body">
                <div className="form-check d-inline-block me-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Holding
                  </label>
                </div>
                <div className="form-check mb-2 d-inline-block">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Trade
                  </label>
                </div>
                <form className="row gy-2 gx-3 align-items-end">
                  <div className="col-auto">
                    <label className="form-label" for="Quantity">
                      Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="Quantity"
                    />
                  </div>
                  <div className="col-auto">
                    <label className="form-label" for="Price">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="Price"
                    />
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="buy_limit"
                      />
                      <label className="form-check-label" for="buy_limit">
                        Limit
                      </label>
                    </div>
                  </div>
                </form>
                <div className="mt-3">
                  <a
                    className=""
                    data-bs-toggle="collapse"
                    href="#SL_Option"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Stop Loss <i className="ti ti-arrow-down-circle"></i>
                  </a>
                  <div className="collapse" id="SL_Option">
                    <form className="row gy-2 gx-3 align-items-center mt-1">
                      <div className="col-auto">
                        <label className="form-label" for="Trigger_Price">
                          Trigger Price
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="Trigger_Price"
                        />
                      </div>
                      <div className="col-auto align-self-end">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="buy_SL"
                          />
                          <label className="form-check-label" for="buy_SL">
                            Stop Loss
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <button className="btn btn-success w-100 my-3">BUY</button>
                <div className="row">
                  <div className="col">
                    <small className="text-muted d-block">Require Fund</small>
                    <small>$00.00</small>
                  </div>
                  <div className="col-auto">
                    <small className="text-muted d-block">Available Fund</small>
                    <small>$8545.00</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="SellStocks"
          tabindex="-1"
          aria-labelledby="SellStocksLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h6 className="modal-title m-0 mb-n1" id="SellStocksLabel">
                    Apple Inc
                  </h6>
                  <span className="font-10 d-block mb-1">nasdaq</span>
                  <span className="border border-danger px-1 rounded text-danger">
                    S
                  </span>
                </div>
                <div>
                  <h6 className="m-0 text-uppercase font-16 fw-bold">
                    $147.95 <i className="ti ti-trending-down text-danger"></i>
                  </h6>
                  <div className="d-inline-block font-10">
                    <span className="text-danger">-110.60</span>{" "}
                    <span className="text-danger">(30.52%)</span>
                  </div>
                  <div className="text-success">
                    Live{" "}
                    <span>
                      <i className="las la-dot-circle"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="form-check d-inline-block me-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="sell_Limit"
                  />
                  <label className="form-check-label" for="sell_Limit">
                    Holding
                  </label>
                </div>
                <div className="form-check mb-2 d-inline-block">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="sell_SL"
                    checked
                  />
                  <label className="form-check-label" for="sell_SL">
                    Trade
                  </label>
                </div>
                <form className="row gy-2 gx-3 align-items-end">
                  <div className="col-auto">
                    <label className="form-label" for="Quantity">
                      Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="Quantity"
                    />
                  </div>
                  <div className="col-auto">
                    <label className="form-label" for="Price">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="Price"
                    />
                  </div>
                  <div className="col-auto">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="autoSizingCheck"
                      />
                      <label className="form-check-label" for="autoSizingCheck">
                        Limit
                      </label>
                    </div>
                  </div>
                </form>
                <div className="mt-3">
                  <a
                    className=""
                    data-bs-toggle="collapse"
                    href="#SL_Option"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Stop Loss <i className="ti ti-arrow-down-circle"></i>
                  </a>
                  <div className="collapse" id="SL_Option">
                    <form className="row gy-2 gx-3 align-items-center mt-1">
                      <div className="col-auto">
                        <label className="form-label" for="Trigger_Price">
                          Trigger Price
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="Trigger_Price"
                        />
                      </div>
                      <div className="col-auto align-self-end">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="buy_SL"
                          />
                          <label className="form-check-label" for="buy_SL">
                            Stop Loss
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <button className="btn btn-danger w-100 my-3">SELL</button>
                <div className="row">
                  <div className="col">
                    <small className="text-muted d-block">Require Fund</small>
                    <small>$00.00</small>
                  </div>
                  <div className="col-auto">
                    <small className="text-muted d-block">Available Fund</small>
                    <small>$8545.00</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="" />
        <footer className=" text-center text-sm-start">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span className="text-muted d-none d-sm-inline-block float-start">
                  &copy; sahilbelim
                </span>

                <span className="text-muted d-none d-sm-inline-block float-end">
                  Crafted with <i className="mdi mdi-heart text-danger"></i> by
                  sahil
                </span>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
