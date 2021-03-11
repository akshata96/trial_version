import React from 'react';
import './login.scss';

function Login(){
  return(
    <div class='login' style = {{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }} >
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="/">Forgot your password?</a>
                    <div> 
                        <view style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <button class="secondary-button">Sign Up</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button>Sign In</button>
                        </view>
                   </div>
            </form>
        </div>
    </div>
    
</div>

  )
}

export default Login;
