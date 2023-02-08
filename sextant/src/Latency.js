import React, { Component } from 'react';


class Latency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }
    openSocket() {
        const socket = new WebSocket('ws://localhost:55455');
        socket.onmessage = function(event) {
            this.setState({latency: event.data - Date.now()})
        }.bind(this);
    }

    render() {
        this.openSocket()
            return(
                <div className="Latency">
                    <h4 className="Packet Latency">{this.state.latency}</h4>
                </div>
            );
            
    }
}

export default Latency;