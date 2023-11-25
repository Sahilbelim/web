import React, { Component } from 'react'
import TradingViewWidget from './TradingView'
import Tgain from './Tgain';
import Tlose from './Tlose';

export default class Toplose extends Component {

  render() {
    return (
     
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <Tlose/>
            </div>
            <div className="col-12 col-lg-6">
              <TradingViewWidget height={500} width={700} />
            </div>
          </div>
        </div>
   
    );
  }
}
