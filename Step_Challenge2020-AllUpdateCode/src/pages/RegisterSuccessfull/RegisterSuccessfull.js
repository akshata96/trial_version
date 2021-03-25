import React, { Component } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from '../../components/FooterComponent/FooterComponent'


export default class RegisterSuccessfull extends Component{

    constructor(){
        super();
        this.state = {
            h:false
        };
    }
    render(){
        return(
            <div>
                <HeaderComponent />
                <h1>Verification email has been sent. Please check your inbox.</h1>
                 <FooterComponent />   
            </div>


        )

    }

}