import React, { Component } from 'react';
import '../App.css'
class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000)
    }
    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        })
    }
    render() {
        return (
            <div className="Time">
                <p>{this.state.time}</p>
            </div>
        );
    }
}

export default Clock;