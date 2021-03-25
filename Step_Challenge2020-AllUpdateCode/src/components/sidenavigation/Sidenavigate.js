import React from 'react'
import { Menu,Layout } from 'antd';
//import {Link } from 'react-router-dom'
//import Profile from '../../pages/profile_page/profile_page'
import {
    DashboardOutlined ,
    LineChartOutlined,
    EnterOutlined,
    SearchOutlined,
    ReconciliationOutlined,
    CommentOutlined,
    TeamOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;



const Sidenav =(props) =>{  
  const { handleClick } = props;   
    return (
      <>
         <Layout.Sider>
        <Menu
          style = {{minHeight:'100vh'}}
          
          
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}  mode="inline"
         
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}  onClick ={handleClick}>
            Dashboard
            
          </Menu.Item>
          <Menu.Item key="2" icon={<EnterOutlined />} onClick ={handleClick}>
            Steps
            
            
          </Menu.Item>
          <SubMenu key="3" icon={<LineChartOutlined />} title="LeaderBoard" onClick ={handleClick}>
            <Menu.Item key="31">Individual</Menu.Item>
            
            <Menu.Item key="32">Team</Menu.Item>
            
          </SubMenu>
          <Menu.Item key="4" icon={<TeamOutlined />} onClick ={handleClick}>
            Teams
            
          </Menu.Item>
          <Menu.Item key="5" icon={<CommentOutlined />} onClick ={handleClick}>
            Forum
            
          </Menu.Item>
          <Menu.Item key="6" icon={<SearchOutlined />} onClick ={handleClick}>
            Search
            
          </Menu.Item>
          <Menu.Item key="7" icon={<ReconciliationOutlined />} onClick ={handleClick}>
            Reports
            
          </Menu.Item>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Ant Design
            </a>
          </Menu.Item>
        </Menu>
        </Layout.Sider>
      
      </>
    );
  }


export default Sidenav