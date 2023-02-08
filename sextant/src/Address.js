import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: null
        };
    }
    render() {
        var address;
        if (this.props.isIPv4) {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    this.setState({address: data.ip});
                })

        } else {
            fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
                .then(data => {
                    this.setState({address: data.ip});
                })
        }
            return(
                <div className="Address">
                    <h4 className="IP Address">{this.state.address}</h4>
                </div>
            );
            
    }
}

export default Address;