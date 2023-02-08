import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Address from './Address';
import Latency from './Latency';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Public IPv4 Address">
            <Address isIPv4={true}></Address>
        </Exhibit>
        <Exhibit name="Public IPv6 Address">
            <Address isIPv4={false}></Address>
        </Exhibit>
        <Exhibit name="Packet Latency">
            <Latency></Latency>
        </Exhibit>
      </div>
    );
  }
}


export default App;
