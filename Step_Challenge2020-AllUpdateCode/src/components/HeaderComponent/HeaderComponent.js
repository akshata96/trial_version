

import React, { Component } from "react";
import {Button, Layout } from 'antd';
import Ublogo from '../../Assets/UBicon.jpg';
import 'antd/dist/antd.css';

import './HeaderComponent.css'
import { 
    Link
} from 'react-router-dom';
//import {FacebookOutlined, InstagramOutlined,TwitterOutlined} from '@ant-design/icons';
import SocialFollow from '../SocialFollow/SocialFollow'


const { Header } = Layout;

export default class HeaderComponent extends Component{

    constructor() {
        super();
        this.state = {
            hover: false,
            userData : "",
            show : false
        };
    }
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    componentWillMount() {
        this.userData = JSON.parse(localStorage.getItem('user'))
        if(this.userData){
            console.log("After mount")
                this.show = true
                console.log(this.show)
        }
    }


   render (){
    
       return(
           <div>
                     <Layout>
      <Header className = "homepageheader">
          <div className = "lockup">
              
              <a href = "//www.buffalo.edu/">
              <img src = {Ublogo} className = "logo" alt = {Ublogo}/>
              </a>
              
              
              <h1 className = "title">
                  
                  <a href = "/" style = {{textDecoration:'none',color:'white'}}>
                      <small>University at buffalo</small>
                      <br/>
                  School of Public Health
                  <br/>
                  and Health Professions
                  </a>
                  
              </h1>
              </div>
              <div className="test">
              <SocialFollow/>
              </div>
              
          <div className = "tasknav">
              { this.show === true ?
              
            ""
          :  <Link to = "/signIn"> 
          <Button className = "Login" > Log In</Button>
          </Link>
         }
         {this.show === true ?
          <Link to = "/profile"> 
          <Button className = "Login" > Profile</Button>
          </Link> 
          : ""
   }
        {this.show === true ? 
        "" 
        :
        <Link to = "/signUp">
          <Button className = "signup">Sign Up</Button>
          </Link>}
          
              </div>
      </Header>
    </Layout>

           </div>
       )
   }

}