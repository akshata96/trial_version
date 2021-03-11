import React, { useState } from 'react'
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Button, Typography} from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Card, Col, Row, Image} from 'antd';
import './Homepage.css';
import image from '../../Assets/wound.jpg'
import logo from '../../Assets/logo.PNG'
import login  from '../Login/login'

const { Header, Content, Footer } = Layout;
const{Title}=Typography;

function Homepage()
{
    const ttl = 'StartWell'

    const [visible, setVisible] = useState(false);
return(
    <div style={{ 
        backgroundImage: `url(${image})` 
      }}>
  <Layout className="layout" >
      
    <Header>
      <div className="logo" />
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" style={{float:"right"}}>
          <Router>
          <Link to="/login"><Avatar size={64} style={{float:'right'}} icon={<UserOutlined />} />
          </Link> 
          <Route path="/login" component={login} />
        </Router>
        </Menu.Item>  
        <Menu.Item key="2" style={{float:"right"}}>About</Menu.Item>
        <Menu.Item key="3" style={{float:"right"}}>Contact Us</Menu.Item>
        <Menu.Item key="4" style={{float:"right"}}>Self Help</Menu.Item>
        <Menu.Item key="5" style={{float:"right"}}>Home</Menu.Item>
        <img width={50} src={logo}/>
        <text></text>
        <text className="title_txt">     Startwell</text>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
      <div className="site-card-wrapper">
    <div>
    <Button hoverable type="primary" size={100} onClick = {()=>{setVisible(true)}} >Lets Go!!</Button>
    </div>
    <br />
     {visible=== true ?(<div>   
    <Row gutter={16}>
      <Col span={8}>
        <Link to={'/Login/login'}>
        <Card className="homecards" hoverable title="I just want to Match" bordered={false}>
          <img
          width={200}
          height={100}
          src="https://res.cloudinary.com/match2lists/image/upload/v1497274659/Match_600_gcdvaf.png"
          />
        </Card>
        </Link>
      </Col>
      <Col span={8}>
        <Card hoverable title="Explore your Options" bordered={false}>
        <img
          width={200}
          src="https://previews.123rf.com/images/tashatuvango/tashatuvango1602/tashatuvango160200922/52240986-explore-your-options-concept-explore-your-options-drawn-on-dark-wall-explore-your-options-in-multico.jpg"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card hoverable title="Dont want to Learn" bordered={false}>
        <img
          width={200}
          src="https://pbs.twimg.com/media/El-lLPCXUAYHXd-?format=png&name=4096x4096"
          />
        </Card>
      </Col>
    </Row>
    </div>):""}
  </div>
      </div>
    </Content>
  </Layout>
  </div>
  
)
}
export default Homepage