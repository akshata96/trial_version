import React, { Component, useState  } from "react";
import './SignUp.css';
import axios from 'axios';
import { Form, Select, Input, Button, Checkbox, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Route , withRouter, useHistory } from 'react-router-dom';

import RegisterSuccess from '../RegisterSuccess/RegisterSuccess.js';
const { Option } = Select;

class SignUp extends Component
{
     constructor(props) {
    super(props);
     this.userdata = {};
    this.state = { 
        form: "Sign-up",
        firstname:"",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
        registration_errors : "",
        hasError:"",
        emailError:"",
        passwordError:"",
        userType:"Customer",
        nameError:"",

        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUserType=this.handleChangeUserType.bind(this);
    this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
    this.handleChangeLastName=this.handleChangeLastName.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangePass=this.handleChangePass.bind(this);
    this.handleChangePass2=this.handleChangePass2.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.handleSuccessfulRegister = this.handleSuccessfulRegister.bind(this);
    }
    validate()  {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let isValid = true;
    
    
    // let input = this.state.input;

    if (!this.state.email) {
      isValid = false;
      emailError = "Please enter your email Address.";
    }

     if (!this.state.firstname || !this.state.lastname) {
      isValid = false;
      nameError = "Please enter your Firstname/LastName";
    }
    if (typeof this.state.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        
        isValid = false;
        emailError = "Please enter valid email address.";
      }
    }

    
    if (this.state.password.length < 7) {
      console.log("in password")
      isValid = false;
      passwordError = "Password length should be greater than 7.";
      
    }
    if(!isValid || emailError){
      this.setState({passwordError})
      this.setState({emailError})
      return false
    }
    if(this.state.password !== this.state.password_confirmation){
      isValid = false;
      passwordError = "Both password doesn't match"
    }
    if(!isValid){
      this.setState({passwordError})
      return false
    }

    return true;
  };
 handleSuccessfulRegister(data)
 {
    window.location="/RegisterSuccess"

  }

//   handleChange(event){


//     this.setState({
//         [event.target.name]:event.target.value,
//         emailError:"",
//         passwordError:"",
//     })

    // }
    handleChangeFirstName(event) {
        this.setState({firstname: event.target.value});
      }      
    handleChangeLastName(event) {
        this.setState({lastname: event.target.value});
      }
    handleChangeUserType(event) {
        this.setState({userType: event});
       }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    handleChangePass(event) {
        this.setState({password: event.target.value});
      }

    handleChangePass2(event) {
        this.setState({password_confirmation: event.target.value});
      }
  
  handleSubmit(e){
    e.preventDefault();
    this.state.passwordError = ""
    this.state.emailError = ""
    const {

        firstname,
        lastname,
        email,
        password,
        userType,
        password_confirmation
    } = this.state;
      const isValid = this.validate();
      console.log("validation true or false",isValid)
      console.log("in Registration")
      console.log(this.state.form)
      console.log(this.state.firstname)
      console.log(this.state.email)
      console.log(this.state.userType)
      if(isValid){
        console.log("Posting")
        axios.post("http://localhost:3200/user/signup",{
            user:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                userType:userType,
                password_confirmation:password_confirmation
            }
        }).then(response =>{

           if(response.data.code === 200){
               console.log("Respone for registration",response.data)
            this.handleSuccessfulRegister(response.data);
            console.log("registration succesfull",response)
            

           }
            else if(response.data.code === 210){
              let emailError = "Email Already Exists"
            this.setState({emailError})
              console.log("Email Already Exists")
            }

        }).catch(error => {
            console.log("error occured",error);
        })
    }
    }
    
    render() {
    return (
   <div>
 <div className="container">
        <br/><br/>
        <Form name="normal_SignUp"
          className="SignUp-form"
          initialValues={{
          remember: true,}}
          onSubmit={this.handleSubmit}>
   <h1> SIGN UP </h1>

 <Form.Item
        name="First-Name"
        label="First-Name"
        rules={[{ required: true, message: 'Please input your FirstName!', whitespace: true }]}
      >
        <Input  placeholder="FirstName" type="text" value = {this.state.firstname} 
              onChange = {this.handleChangeFirstName} required />
      </Form.Item>
        <Form.Item
        name="Last-Name"
        label="Last-Name"
        rules={[{ required: true, message: 'Please input your Last-Name!', whitespace: true }]}
      >
        <Input placeholder="lastname" type="text" value = {this.state.lastname} 
              onChange = {this.handleChangeLastName} />
      </Form.Item>
      


    <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
        placeholder="Email-ID" 
        value={this.state.email} 
        onChange={this.handleChangeEmail}
         /> 
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input 
          type="password"
          placeholder="Password"
          value={this.state.password} 
          onChange={this.handleChangePass} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input placeholder="Re-typed password" type="password" value = {this.state.password_confirmation} 
              onChange = {this.handleChangePass2} />
      </Form.Item>

     
        <Form.Item
        name="User-Type"
        label="User-Type"
        hasFeedback
        rules={[{ required: true, message: 'Please select your User Type!' }]}
      >
        <Select placeholder="Please select a User Type" value={this.state.userType}  onChange={this.handleChangeUserType}>
        <Option value="Customer">Customer</Option>
          <Option value="Provider">Provider</Option>
        </Select>
      </Form.Item> 
      <Form.Item >
        <Button type="primary" disabled={!this.state.email || !this.state.password || !this.state.password_confirmation || !this.state.firstname || !this.state.lastname || !this.state.userType} onClick = {this.handleSubmit} >
          Register
        </Button>
      </Form.Item>
       <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
        <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
    </Form>
    
    </div>
  </div>
 
    );
    
    }

}

export default SignUp;

