import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
 
  constructor(props) {
        super(props);
        this.userdata = {};
        this.state = {
            email: '',
            pass:'',  
            successSignUp:false, 
            usertype:1, 
            loggedIn:false,  
            wrongCredentials:false};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleSuccessSignUp = this.handleSuccessSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleBacktoLogin = this.handleBacktoLogin.bind(this);
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangePass(event) {
        this.setState({pass: event.target.value});
      }

      handleUserLogin(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify(this.state)
        };
        fetch('http://localhost:3200/user/login', requestOptions)
            .then(response => response.json())
            .then((data) => {
                if(data === []){
                    
            this.handleWrongCredentials();
                } else {
                    this.userdata = data[0];
                    console.log(this.userdata);
                    this.handleLogin();
                    this.render()
                }
            });

        event.preventDefault();
      }
    handleLogin(){
          this.setState({loggedIn:true});
      }      

    handleLogout(){
        this.userdata = {};
        this.setState({email: '', pass:'', usertype:1, loggedIn:false, wrongCredentials:false});
        this.setState({loggedIn:false});
    }
     handleBacktoLogin(){
      this.userdata = {};
      this.setState({email: '', pass:'',usertype:1, loggedIn:false, wrongCredentials:false});
      this.setState({successSignUp:false});
      this.setState({loggedIn:false});
  }

  handleSuccessSignUp(){
        this.setState({showSignUp:false});
        this.setState({successSignUp:true});
    }

  handleWrongCredentials(){
    this.setState({email: '', pass:'', usertype:1, loggedIn:false, wrongCredentials:false});
    this.setState({wrongCredentials : true})
  }

 
   
 
render() {
        
    return (


        <div className="container">
        <br/><br/>
        <Form name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
        onSubmit={this.handleUserLogin}}}>
<h1> LOGIN </h1>

    <Form.Item
        label="Email-ID"
        name="Email-ID"
        rules={[{ required: true, message: 'Please input your Email-ID!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />}
         placeholder="Email-ID" 
         value={this.state.email} 
         onChange={this.handleChangeEmail} /> 
      </Form.Item>
      <Form.Item label="Password" name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={this.state.pass} 
          onChange={this.handleChangePass}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleUserLogin}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    
    </div>
    
    );
     }
}


export default Login;