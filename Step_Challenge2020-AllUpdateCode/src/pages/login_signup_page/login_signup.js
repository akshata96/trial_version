import axios from 'axios';
import React from 'react';
import '../login_signup_page/login_signup.css';
// import { Anchor,Input } from 'antd';

// const { Link } = Anchor;


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        
        form: "login" ,
        firstname:"",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
        registration_errors : "",
        hasError:"",
        emailError:"",
        passwordError:"",
        LoginError:""


 };

    this.toggle = {
      login: "register",
      register: "login",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleSuccessfulRegister = this.handleSuccessfulRegister.bind(this);
  }
  validate = () => {
    // let nameError = "";
    let emailError = "";
    let passwordError = "";
    let isValid = true;
    // let input = this.state.input;

    if (!this.state.email) {
      isValid = false;
      emailError = "Please enter your email Address.";
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

  handleSuccessfulAuth(data){
    this.props.handleLogin(data);
    this.props.history.push("/ChallengePage");

  }

  handleSuccessfulRegister(data){
    this.props.history.push("/RegisterSuccessfulPage");

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
        password_confirmation
    } = this.state;
    if(this.state.form === "login"){

        axios.post("/checkuser", {
            user:{
                email:email,
                password:password
            }
        }).then(response => {
          if(response.data.code === 200){
            console.log(JSON.stringify(response.data))
            localStorage.setItem('user',JSON.stringify(response.data))
          this.handleSuccessfulAuth(response.data);
            console.log("registration succesful",response)
          }
          else if(response.data.code === 204){
            let LoginError = "Email or password is incorrect"
            this.setState({LoginError})
            console.log("Email and password does not match",response)
          }
          else if (response.data.code === 206){
            let LoginError = "Email or password is incorrect"
            this.setState({LoginError})
            console.log("Email does not exist",response)
          }
        }).catch(error => {
            console.log("error occured",error);
        })


    }
    else{
      const isValid = this.validate();
      console.log("in elsse")
      console.log(isValid)
      if(isValid){
        axios.post("/addUser",{
            user:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                password_confirmation:password_confirmation
            }
        }).then(response =>{

           if(response.data.code === 200){
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
    
    


  }


  handleChange(event){


    this.setState({
        [event.target.name]:event.target.value,
        emailError:"",
        passwordError:"",
        LoginError:""

    })

    }

  render() {
    return (
      <div className="container">
        
        <div
          style={{
            transform: `translate(${
              this.state.form === "login" ? 0 : 250
            }px, 0px)`,
          }}
          className="form-div"
        >
          <form onSubmit={this.handleSubmit}>
          { this.state.form === "login" ? (
              ""
            ) : (
              <input name = "firstname" placeholder="FirstName" type="text" value = {this.state.firstname} 
              onChange = {this.handleChange} required/>
            )}
            {this.state.form === "login" ? (
              ""
            ) : (
              <input name = "lastname" placeholder="lastname" type="text" value = {this.state.lastname} 
              onChange = {this.handleChange} required/>
            )}
            {this.state.form === "login" ? (
              <div>
              <input name = "email" placeholder="Email" type="text" value = {this.state.email} 
              onChange = {this.handleChange} required/>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.LoginError}
              </div>
              </div>
            ) : (
              <div>
            <input name = "email" placeholder="Email" type="text" value = {this.state.email} 
            onChange = {this.handleChange} required/>
            <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emailError}
              </div>
            </div>
               )}
              {this.state.form === "login" ? (
                <input name = "password" placeholder="Password" type="password" value = {this.state.password} 
                onChange = {this.handleChange} required/>
              ): (
                <div>
                <input name = "password" placeholder="Password" type="password" value = {this.state.password} 
                onChange = {this.handleChange} required/>
                <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError}
              </div>
                </div>
              )}

            {this.state.form === "login" ? (
              ""
            ) : (
              <input name = "password_confirmation" 
              placeholder="Re-typed password" type="password" value = {this.state.password_confirmation} 
              onChange = {this.handleChange} required/>
            )}
            {this.state.form === "login" ? (
              <a className="login-form-forgot" href="/forgotpassword"><p style={{textAlign:"center"}}>Forgot password</p></a>
              
            ) : (
              ""
            )}

            {this.state.form === "login" ? (
              <button className="submit" onClick = {()=>
                this.handleSuccessfulAuth = this.handleSuccessfulAuth}>Log In</button>
            ) : (
              <button className="submit" onClick = {()=>
                this.handleSuccessfulRegister = this.handleSuccessfulRegister}>Register</button>
            )}

          </form>
        </div>
        <div
          style={{
            transform: `translate(${
              this.state.form === "login" ? 0 : -250
            }px, 0px)`,
          }}
          className="button-div"
        >
          <p>
            {this.state.form === "login"
              ? "Do not have an account?"
              : "Already a member?"}
          </p>
          <button
            onClick={() => {
              this.setState({ form: this.toggle[this.state.form] });
            }}
          >
            {this.toggle[this.state.form]}
          </button>
        </div>
      </div>
    );
  }
}

