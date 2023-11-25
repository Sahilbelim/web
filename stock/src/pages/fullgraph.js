import React, { Component } from 'react'
import TradingViewWidget from './TradingView'

export default class Fullgraph extends Component {
  render() {
    return (
      <div>
            <TradingViewWidget height={500 } width={1200}  />
      </div>
    )
  }
}
