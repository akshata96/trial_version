import React, { Component } from "react";


import axios from "axios"; 
export default class hello extends Component {

    constructor() {
        super();
        this.state = {
            weather: "Not yet gotten"
        };
    }

    buttonclick = () =>{
     axios.get("/mysql").then(response =>{

        console.log(response.data);
        this.setState({
        weather: response.data
        })
     });

    };
    render () {
        return (
            <div>
                <button onClick = {this.buttonclick}> Get</button>
        <h1>the world is : {this.state.weather}</h1>
            </div>
        )
    }

}