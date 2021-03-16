import React, { Component } from "react";
import './Login.css';

class Login extends Component {



    constructor(props) {
        super(props);
        this.userdata = {};
        this.state = {email: '', pass:'', firstname:'', lastname:'', dob:'1970-01-01 00:00:01', username:'', signedUp:'', usertype:1, errorSignup : false, successSignUp:false, loggedIn:false, showSignUp: false, wrongCredentials:false};
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeDOB = this.handleChangeDOB.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);

        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        
        this.handleUserSignUp = this.handleUserSignUp.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSuccessSignUp = this.handleSuccessSignUp.bind(this);
        this.handleBacktoLogin = this.handleBacktoLogin.bind(this);
      }
    
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangePass(event) {
        this.setState({pass: event.target.value});
      }
      handleChangeFirstName(event) {
        this.setState({firstname: event.target.value});
      }      
      handleChangeLastName(event) {
        this.setState({lastname: event.target.value});
      }      
      handleChangeDOB(event) {
        this.setState({dob: event.target.value});
      }      
      handleChangeUserName(event) {
        this.setState({username: event.target.value});
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


      handleUserSignUp(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify(this.state)
        };
        fetch('http://localhost:3200/user/signup', requestOptions)
            .then(response => response.json())
            .then((data) => {
                    this.userdata = data;
                    this.handleSuccessSignUp();
                    this.render()
   
            }).catch(() => {
                this.setState({ errorSignup : true});
            });

        event.preventDefault();
      }

      handleLogin(){
          this.setState({loggedIn:true});
      }      

      handleLogout(){
        this.userdata = {};
        this.setState({email: '', pass:'', firstname:'', lastname:'', dob:'1970-01-01 00:00:01', username:'', signedUp:'', usertype:1,errorSignup : false, successSignUp:false, loggedIn:false, showSignUp: false, wrongCredentials:false});
        this.setState({loggedIn:false});
    }
    
    handleSignUp(){
        this.setState({showSignUp:true});
    }      

    handleSuccessSignUp(){
        this.setState({showSignUp:false});
        this.setState({successSignUp:true});
    }   


    handleBacktoLogin(){
      this.userdata = {};
      this.setState({email: '', pass:'', firstname:'', lastname:'', dob:'1970-01-01 00:00:01', username:'', signedUp:'', usertype:1,errorSignup : false, successSignUp:false, loggedIn:false, showSignUp: false, wrongCredentials:false});
      this.setState({successSignUp:false});
      this.setState({showSignUp:false});
      this.setState({loggedIn:false});
  }

  handleWrongCredentials(){
    this.setState({email: '', pass:'', firstname:'', lastname:'', dob:'1970-01-01 00:00:01', username:'', signedUp:'', usertype:1,errorSignup : false, successSignUp:false, loggedIn:false, showSignUp: false, wrongCredentials:false});
    this.setState({wrongCredentials : true})
  }





  render() {
      let template;
    console.log(this.state)
      if(this.state.showSignUp){
        let errSignup;
        if(this.state.errorSignup){
            errSignup = <p class='error'>Signup Error</p>
    } else {
        errSignup = <div></div>
    }



        template =
            <div class="login">
            <h3 class="center-text">Sign Up</h3>
            <div>
                <input  placeholder="First Name" type="text" value={this.state.firstname} onChange={this.handleChangeFirstName}></input>
                <input  placeholder="Last Name" type="text" value={this.state.lastname} onChange={this.handleChangeLastName}></input>
                <input  placeholder="Date of Birth" type="text" value={this.state.dob} onChange={this.handleChangeDOB}></input>
                <input  placeholder="User Name" type="text" value={this.state.username} onChange={this.handleChangeUserName}></input>
                <input  placeholder="Email Address" type="text" value={this.state.email} onChange={this.handleChangeEmail}></input>
                <input  placeholder="Password" type="password" value={this.state.pass} onChange={this.handleChangePass}></input>
                </div>
            <div>
                <div>
                    {errSignup}
                    <div class="actions">
                        <button onClick={this.handleUserSignUp}>Sign Up</button>
                                  <button onClick={this.handleBacktoLogin}>Back</button>
                    </div>
                </div>
            </div>
        </div>
                
                      } else  {
                        if(this.state.successSignUp){
                            template =         
                            <div class="login">
                                <p>{this.userdata.user}, Hooray! Sign Up Successful!</p>
                                  <button onClick={this.handleBacktoLogin}>Log In</button>
                            </div>
                        } else {
                            if(!this.state.loggedIn){
                                let wrongCred;
                                if(this.state.wrongCredentials){
                                wrongCred = <p class='error'>Email Address or Password Incorrect</p>
                            } else {
                                wrongCred = <div></div>
                            }


                                template =    
                                <div class="login">
                                <h3 class="center-text">Login</h3>
                                <div>
                                    <input placeholder="Email Address"  type="text" value={this.state.email} onChange={this.handleChangeEmail}></input>
                                    <input  placeholder="Password" type="password" value={this.state.pass} onChange={this.handleChangePass}></input>
                                </div>
                                {wrongCred}
                                <div>
                                    <div>
                                        <a class="text">Forgot Password</a>
                                        <div class="actions">
                                            <button onClick={this.handleSignUp}>Sign Up</button>
                                            <button onClick={this.handleUserLogin}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            } else {
                    
                        template =         
                        <div class="login">
                            <p>Hello {this.userdata.First_Name + ' ' + this.userdata.Last_Name}, Login Successful.</p>
                              <button onClick={this.handleLogout}>Log Out</button>
                        </div>
                    
                            }
                        }
            
                
                      } 




    return (
    <div class="wall">
     {template}
    </div>)
    }

  

}

export default Login;
