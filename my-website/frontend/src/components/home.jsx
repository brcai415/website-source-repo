import '../App.css'
import React, { Component } from 'react';
import Clock from './clock';
import GitLogo from '../images/GitHub-Mark-Light-120px-plus.png'
import LinkedInLogo from '../images/LI-In-Bug.png'
import NavBar from './navBar'
import me from '../images/me.JPG';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="flex-container">
                    <div className="flex-child">
                        <Clock />
                    </div>
                    <div className="flex-child">
                        <NavBar />
                    </div>
                </div>

                <header className="App-header">
                    <p></p>
                    <img className="profile-picture" src={me} alt='me' />
                    <p>
                        Hi, I'm Brandon!
                    </p>
                </header>

                <div className="flex-container">
                    <div className="flex-child">
                        <div className="contact-bar">
                                <a
                                    className="contact-bar"
                                    href="https://www.linkedin.com/in/brandon-cai-00b935190/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={LinkedInLogo} height="100px"/>
                                </a>
                                <a
                                    className="contact-bar"
                                    href="https://github.com/brcai415"
                                    target="_black"
                                    rel="noopener noreferrer"
                                >
                                    <img src={GitLogo} height="100px" />
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;