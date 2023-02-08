import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Address from './Address';

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
      </div>
    );
  }
}


export default App;
