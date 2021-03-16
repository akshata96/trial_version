import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import HomePage from './Components/HomePage/HomePage';

import 'antd/dist/antd.css';

import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Card, Col, Row, Image} from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
  

  render() {
    
    return (

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/HomePage" component={HomePage} />
          
          </Switch>
        </div>
      
    );
  }
}

export default App;