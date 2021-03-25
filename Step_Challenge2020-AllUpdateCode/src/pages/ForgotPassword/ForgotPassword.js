import axios from 'axios';
import React from 'react';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { Form, Input, Button,Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  };
export default class ForgotPassword extends React.Component {
    constructor(){
        super()
        this.state ={
            email: '',
            showError : '',
            message :  '',
            showEmailbox: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }
    
    
    handleChange(event){

        //console.log(event.target.value)
        this.setState({
            email:event.target.value
            
        })
    
        }
    submitEmail(e){
        console.log("in ")
        
        axios.post('/forgotpassword', {
            email: this.state.email,
        }).then(response => {
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
                <HeaderComponent />
            <div className = "fp_container">
                
            
           {!(this.state.message === 'recovery email sent') && ( <div>  
           
                <Form  {...layout} onFinish = {this.submitEmail} >
                <Row >
      <Col span={12} offset={6}>
                <Form.Item style= {{margin:'60pt'}}
      
      
        name="email"
        label={<label style={{ fontSize:'14pt',lineHeight:'18pt',color: '#000000' }}>Email</label>}
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid Email'
          },
        ]}
      >
        <Input placeholder="Enter Email" id="success"  onChange = {this.handleChange}/>
                  
        
        </Form.Item>
        </Col>
    </Row>
    <Row type="flex" justify = "center" >
      <Col >
        <Form.Item {...tailLayout}>
        <Button type="primary" ghost htmlType="submit" onSubmit = {this.submitEmail}>
          Submit
        </Button>
            </Form.Item>
            </Col>
             </Row>
                </Form>
                </div>)}
                {this.state.showError && (
                    <div>
                        <Row>
                           <Col span={12} offset={6}> 
                        <p className = "e_not_rec">
                            The given email address does not recognized, Please try again or register for a
                            new account.
                        </p>
                        </Col>
                        </Row>
                        <Row>
                            <Col span={12} offset={6}>
                        <Link to = "/signUp">
                        <Button type = "primary" ghost>Register</Button>
                        </Link>
                        </Col>
                        </Row>
                    </div>
                )}
                {this.state.message === 'recovery email sent' && (
                    <div>
                        <h3 className = "resetSuccess"> Password Reset Email sent successfully</h3>
                        <Link to = "/">
                        <Button type = "primary" ghost>Go Home</Button>
                        </Link>
                    </div>
                )}
                
            </div>
            <FooterComponent />
            </div>
        )
    }
}