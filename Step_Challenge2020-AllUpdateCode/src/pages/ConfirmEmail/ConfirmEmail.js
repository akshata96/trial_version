import { Button } from 'antd';
import axios from 'axios';
import React from 'react';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'





export default class ConfirmEmail extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            Confirm_password : '',
            update : '',
            isLoading : '',
            error : '',
            passwordError: '',
            regeneratelink : false

        }
       
        this.regeneratelink = this.regeneratelink.bind(this)

    }
     componentWillMount(){
        var lastPart = window.location.href.split("/").pop();
        console.log(lastPart);
         axios.get('/validatetoken', {
           params:{
                resetPasswordToken : window.location.href.split("/").pop(),
           } 
        }).then(response => {
            console.log(response)
            if(response.data.code === 200){
                // console.log("success")
                console.log(response)
                this.setState({
                    email : response.data.results[0].Email,
                    update : false,
                    isLoading : false,
                    error : false,
                })
            }
            else {

                this.setState({
                    email : response.data.results[0].Email,
                    update : false,
                    isLoading : false,
                    error: true,
                })
            }
        }).catch(error => {
            console.log(error)
        })
     }


     regeneratelink(){
         const{email} = this.state
         console.log(this.state.email)
         axios.get('/regeneratelink', {
             params :{
                 email_id : email 
             }
         }).then(response =>{
             if(response.data.code === 200){
                 console.log("Success")
                 this.setState({
                     regeneratelink : true
                 })
             }
             else{
                 console.log("Error")
             }
         }).catch(error =>{
             console.log(error)
         })
     }
    

   


     render () {

        if(this.state.error === true){
            return(
                <div>
                    <HeaderComponent />
                    <h4>Problem activating account. Please click on the below button to send another link</h4>
                    
                        <Button type = "Primary" onClick = {this.regeneratelink}> Generate Link</Button>
                        <FooterComponent />
                
                 {/* <FooterComponent /> */}
                </div>
            )
        }
        else if(this.state.error === true && this.state.regeneratelink === true){
            return (
                <div>
                    <HeaderComponent />
                    <h4>Regeneration Link has been sent</h4>
                    <FooterComponent />
                </div>
            )
        }
        else{
            return(
                <div>
                    <HeaderComponent />
                    <h2>Account activated successfully.</h2>
                    <h2> You may now login to register for the challenge. </h2>
                    <FooterComponent />
                </div>
            
            )
        }
     }
}