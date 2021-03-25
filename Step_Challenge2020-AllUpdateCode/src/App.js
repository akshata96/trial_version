// export default App;
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Homepage  from './pages/homePage/homepage'
import Loginpage from './pages/login_signup_page/login_signup'
import Registerpage from './pages/login_signup_page/login_signup'
import ChallengePage from './pages/ChallengePage/ChallengePage'
import Profile from '../src/pages/profile_page/profile_page'
import RegisterSuccessfull from '../src/pages/RegisterSuccessfull/RegisterSuccessfull'
import DashboardPage from '../src/pages/DashboardPage/DashboardPage'
import ForgotPassword from '../src/pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Navigate from '../src/components/sidenavigation/Sidenavigate_antd'
import ConfirmEmail from '../src/pages/ConfirmEmail/ConfirmEmail'
import Sidenavigate_antd from '../src/components/sidenavigation/Sidenavigate_antd'


// import Header from './components/header/header'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      loggedInStatus:"NOT_LOGGED_IN",
      user: {},
      currentUser:null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus(){
    
      const l = localStorage.getItem("user");
      if(l)
      this.loggedInStatus = "LOGGED_IN"
      else
      this.loggedInStatus = "NOT_LOGGED_IN"
    
  }
  componentDidMount(){
    this.checkLoginStatus();
  }
  handleLogin(data){
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.results[0]
    });
  }

  render(){
    return (
      
      <div >
        <div className="App">
      
    </div>
      <Router>
        
      <Switch>
        <Route 
        exact
        path = {"/"} 
        render = {props =>(
          <Homepage {...props } loggedInStatus= {this.state.loggedInStatus}
          />
        )}
        /> 
        <Route path = "/profile" component = {Profile}/>
        <Route 
        exact 
        path = {"/signIn"} 
        render = {props =>(
         <Loginpage {...props} handleLogin = {this.handleLogin} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />
        <Route 
        exact 
        path = {"/signUp"} 
        render = {props =>(
         <Registerpage {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />

        <Route 
        exact 
        path = {"/ChallengePage"} 
        render = {props =>(
         <ChallengePage {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />
        <Route 
        exact 
        path = {"/RegisterSuccessfulPage"} 
        render = {props =>(
         <RegisterSuccessfull {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />
        <Route 
        exact 
        path = {"/nav/Dashboard"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />


        <Route 
        exact 
        path = {"/nav/StepsPage"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />

        <Route 
        exact 
        path = {"/nav/Reports"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />
        <Route 
        exact 
        path = {"/nav/TeamLeaderboard"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        /> 
        <Route 
        exact 
        path = {"/nav/IndividualLeaderBoard"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />  
        <Route 
        exact 
        path = {"/nav/Teams"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />  
        <Route 
        exact 
        path = {"/nav/Searchusers"} 
        render = {props =>(
         <Sidenavigate_antd {...props} loggedInStatus = {this.state.loggedInStatus}
          />
        )}
        
        />    


        <Route 
        exact 
        path = {"/ForgotPassword"} 
        render = {props =>(
         <ForgotPassword 
          />
        )}
        
        />
        <Route 
         
        path = {"/ResetPassword"} 
        render = {props =>(
         <ResetPassword 
          />
        )}
        
        />
        <Route exact path = "/nav" component = {Navigate}></Route>

        <Route 
        path = {"/ConfirmEmail"}
        render = {props =>(
          <ConfirmEmail />
        )} />
        
        </Switch>
        </Router>
      </div>
      
      
    );
  }
  
}

export default App;

