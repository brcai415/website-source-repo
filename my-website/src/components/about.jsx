import '../App.css'
import React, { Component } from 'react';
import NavBar from './navBar';
import Clock from './clock'

class About extends Component {
    render() {
        const listStyle = {
            listStyle: 'none'
        }
        return (
            <div>
                <div className="flex-container">
                    <div className="flex-child">
                        <Clock />
                    </div>
                    <div className="flex-child">
                        <NavBar />
                    </div>
                </div>
                <div>
                    <h1>About Me</h1>
                </div>
                <div>
                    <p className="education">
                        <h2><u>Education</u></h2>
                        <dl style={listStyle}>
                            <li>University of California, Riverside</li>
                            <li>Bachelors of Science</li>
                            <li>Computer Science and Business Applications</li>
                        </dl>
                    </p>
                </div>
            </div>

        );
    }
}

export default About;