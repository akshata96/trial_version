import React, { Component } from "react";
import { Form, Input, Button,Row, Col } from 'antd';
import { Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ResetPassword from '../ResetPassword/ResetPassword'
import './ForgotPassword.css'
import axios from 'axios'; 

class ForgotPassword extends Component {
  
    constructor(props) 
    {
        super(props);
        this.state ={
            email: '',
            showError : '',
            message :  '',
            showEmailbox: true,
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    
      
    submitEmail(event){
        console.log("in ")
        axios.post('http://localhost:3200/user/forgotpassword',{email: this.state.email,})
            .then(response => {
            console.log(response.data);
            if(response.data.code === 210){
                this.setState({
                    showError: true,
                    message : '',
                })
            }
            else if (response.data.code === 200){
                this.setState({
                    showError : false,
                    message : 'recovery email sent',
                    showEmailbox:false,
                })
            }
        }).catch(error => {
            console.log(error)
        })
       return false; 
    }
    
        

    

      render(){
        return(
            
            <div >  
            <div className = "fp_container"> {!(this.state.message === 'recovery email sent') && 
           ( <div>
               <h2> Forgot Password</h2>  
            <Form onFinish = {this.submitEmail} >
            <Form.Item style= {{margin:'40pt'}} name="email"
            label={<label style={{ fontSize:'14pt',lineHeight:'18pt',color: '#000000' }}>Email</label>}
            rules={[{type: 'email', message: 'Please enter a valid Email'},]}>
            <Input placeholder="Enter Email" id="success"  onChange = {this.handleChangeEmail}/> 
            </Form.Item>
    
   
        <Form.Item >
        <Button type="primary" ghost htmlType="submit" onSubmit = {this.submitEmail}> 
        Submit
        </Button>
        </Form.Item>
        </Form>
        </div>)}
        {this.state.showError && (
        <div>
        <p className = "e_not_rec">
            The given email address does not recognized, Please try again or register for a new account.
            </p>
            </div>)}
        {this.state.message === 'recovery email sent' && (
        <div> <h3 className = "resetSuccess"> Password Reset Email sent successfully</h3>
        {/* <Link to = "/ResetPassword"> <Button type = "primary" ghost>ResetPassword</Button>
        </Link> */}
        </div>)}   
        </div>
        </div>
        )
    }
}

export default ForgotPassword;