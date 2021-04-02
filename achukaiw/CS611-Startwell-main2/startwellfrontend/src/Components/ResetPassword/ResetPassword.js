import { Button,Row } from 'antd';

import axios from 'axios';
import React from 'react';

import './ResetPassword.css'

import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

const layout = {
    labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
  };
//   const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
//   };

export default class ResetPassword extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            Confirm_password : '',
            update : '',
            isLoading : '',
            error : '',
            passwordError: ''

        }
        this.updatePassword = this.updatePassword.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);

    }
     componentDidMount(){
        var lastPart = window.location.href.split("/").pop();
        console.log("removing the link",lastPart);
         axios.get('http://localhost:3200/user/resetpassword/', {params:{resetPasswordToken : window.location.href.split("/").pop(),} 
        }).then(response => {
            if(response.data.code === 200){
                console.log(" EmailID",response.data.results[0].EmailID)
                this.setState({
                    email : response.data.results[0].EmailID,
                    update : false,
                    isLoading : false,
                    error : false,
                })
            }
            else {
                this.setState({
                    update : false,
                    isLoading : false,
                    error: true,
                })
            }
        }).catch(error => {
            console.log(error)
        })
     }
     handleChange(event){

        //console.log(event.target.value)
        this.setState({
            password:event.target.value
            
        })
    
        }
        handleChange1(event){

            //console.log(event.target.value)
            this.setState({
                confirm_password:event.target.value
                
            })
        
            }

     updatePassword(e){
         const isValid = this.validate()
         if(isValid){
         console.log("in updatepassword")
         axios.put('http://localhost:3200/user/updatepassword/', {
             email : this.state.email,
             password:this.state.password,
             confirm_password : this.state.Confirm_password
         }).then(response => {
             if(response.data.code === 200){
                 console.log("success")
                 this.setState({
                     update : true,
                     error : false,
                 })
             }
             else {
                 this.setState({
                     update : false,
                     error : true,
                 })
             }
         }).catch(error =>{
             console.log(error)
         })
        }
         return false;
     }

     validate = () => {
        // let nameError = "";
        
        let passwordError = "";
        let isValid = true;
        // let input = this.state.input;
        
        if (this.state.password.length < 7) {
          console.log("in password")
          isValid = false;
          passwordError = "Password length should be greater than seven.";
          
        }
        if(!isValid){
          this.setState({passwordError})
          return false
        }
        if(this.state.password !== this.state.confirm_password){
          isValid = false;
          passwordError = "Both password doesn't match"
        }
        if(!isValid){
          this.setState({passwordError})
          return false
        }
    
        return true;
      };




     render () {

        if(this.state.error === true){
            return(
                <div>
                    
                <div className = "up_password">
                    
                    <h4>Problem resetting password. click below to send another link</h4>
                    <Link to = '/ForgotPassword'>
                        <Button type = "Primary">Generate Link</Button>
                    </Link>
                    <Link to = '/'>
                        <Button type = "Primary">Go Home</Button>
                    </Link>
                    
                </div>
               
                </div>
            )
        }
        else{
            return(
                <div>
                  
                <div>
                
                {!this.state.update && (<div className = "up_password">
               
                <Form  {...layout} name="nest-messages" onFinish = {this.updatePassword} className="login-form" >
                
                <FormItem style= {{margin:'20pt'}}
                
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input   type="password" placeholder="Password"  onChange = {this.handleChange}/>
                <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError}
              </div>
              
                </FormItem>
              
                <FormItem  style= {{margin:'20pt'}} name="confirm_password"
                rules={[{ required: true, message: 'Please confrim your password!' }]}>
                
                <Input   type="password" placeholder="Confirm Password" onChange = {this.handleChange1}/>
                </FormItem >
                <FormItem style= {{marginLeft:'20pt'}}>
                <Button onClick = {this.updatePassword} htmlType="submit" style = {{color:'white',backgroundColor:'#005bbb'}}>
                    Update Password</Button>
                </FormItem>
                
            </Form> 
        </div>)}
                {this.state.update && (
                    <div className = "up_password">
                        
                        <h3 className = "resetSuccess">
                            Your password has been successfully updated please click on login button to login</h3>
                        <Link to ="/Login">
                            <Button type = "Primary" > Log In</Button>
                        </Link>
                       
                    </div>
                )}
                
                </div>
                
                </div>
            )
        }
     }
}