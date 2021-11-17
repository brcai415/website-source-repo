import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Component } from "react";
import { render } from "react-dom";

class SongSuggestion extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return ( <h1> testing react code</h1>);
    }
}

// const appDiv = document.getElementById("app");
// render(<SongSuggestion/>, appDiv);

export default SongSuggestion