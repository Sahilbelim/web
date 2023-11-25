import React, { Component } from 'react'
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";
export default class Tgain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    
    };
  }
  get_company = () => {
    var myurl =
      "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=CC30lxyzFfe9IKTSdRXN9XJCF4Nf7eiP";
    axios({
      method: "get",
      responseType: "json",
      url: myurl,
    })
      .then((Response) => Response.data)
      .then((json) => this.setState({ data: json }));
    
  };
  componentDidMount() {

    this.get_company();
    
  }
  render() {
    return (
      <>
        
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title">Top Gainers</h4>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive dash-social">
                <table id="Top_Gainer" className="table table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th>Company Name</th>
                      <th className="text-end">Stock Price</th>
                      <th className="text-end">Change</th>
                      <th className="text-end">% Change Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((company) => {
                      let link = `/topgain/${company.symbol}`;
                      return (
                        <tr>
                          <td>
                            <Link to={link}>
                              {company.name}
                              
                            </Link>
                          </td>
                          <td className="text-end">
                            {company.price}
                            <i className="ti ti-trending-up text-success"></i>
                          </td>
                          <td className="text-success text-end">
                            {company.change}
                          </td>

                          <td className="text-end">
                            {company.changesPercentage} %
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Outlet/>
              </div>
            </div>
          </div>
       
     </>
    );
  }
}
