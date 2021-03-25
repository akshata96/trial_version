// import React, { useState } from "react";
// import { Layout } from "antd";
// import Sider from "./Sidenavigate";
// import Teams from '../../pages/teams_page/teams'
// import Positionalayout from '../positionslayout/postionlayout'
// import Reports from '../../pages/reports/reports'
// import Grouppositionlayout from '../positionslayout/grouppositionlayout'
// import Searchusers from '../../pages/searchpage/searchusers'

// import StepsPage from '../../pages/StepsPage/Steps_page'
// // import JoinChat from '../globalChat/Join/Join'

// const { Content } = Layout;
// export default function Navigate() {
//   const style = {
//     fontSize: "30px",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   };

//   const components = {
//     1: <div style={style}>Option 1</div>,
//     2: <StepsPage/>,
//     3:<div style={style}>Option 2</div>,
//     31: <Positionalayout/>,
//     32: <Grouppositionlayout/>,
//     4: <Teams />,
//     5: <div style={style}>Option 5</div>,
//     6: <Searchusers/>,
//     7: <Reports/>
//   };

//   const [render, updateRender] = useState(1);

//   const handleMenuClick = menu => {
      
//     updateRender(menu.key);
//   };

//   return (
//     <div className="App">
//       <Layout style={{ minHeight: "100vh",maxwidth:'20vw'}}>
//         <Sider handleClick={handleMenuClick} />
//         <Layout>
//           <Content>{components[render]}</Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// }
import React, { Component } from 'react';
import {  BrowserRouter as Router,Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined ,
  LineChartOutlined,
  EnterOutlined,
  SearchOutlined,
  ReconciliationOutlined,
  CommentOutlined,
  TeamOutlined,
LinkOutlined
} from '@ant-design/icons';

import Teams from '../../pages/teams_page/teams'
import Positionalayout from '../positionlayout/positionlayout'
import Reports from '../../pages/reports/reports'
import Grouppositionlayout from '../positionlayout/grouppositionlayout'
import Dashboard from '../../pages/DashboardPage/DashboardPage'
import Searchusers from '../../pages/searchpage/searchusers'
import StepsPage from '../../pages/StepsPage/Steps_page'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Navigate extends Component {


  constructor(props){
    super(props);
    this.state = {
      key:"",
    }
  }

  componentDidMount(){
    console.log(window.location.href)
    var lastPart = window.location.href.split("/").pop();
    
    if(lastPart==="Dashboard"){
      console.log(lastPart)
      this.setState({
        key:"4",
      })
    }
  }
    
    

  render() {
    console.log("\""+this.state.key+"\"")
    return (
      <Router>
        <Layout style={{color:'#fff',backgroundColor:'#fff'}} >
               <HeaderComponent />
          <Layout>
              <Sider
                >
                <div className="logo" />

                <Menu  defaultSelectedKeys = {['1']}>                        
		              <Menu.Item key="1" icon={<DashboardOutlined />}  >
                    <span>Dashboard</span>
                      <Link to="/nav/Dashboard" />
                      </Menu.Item>
                      <Menu.Item key="2" icon={<EnterOutlined />} >
                        Steps
                        <Link to="/nav/StepsPage" />
                        
                      </Menu.Item>
                      <SubMenu key="3" icon={<LineChartOutlined />} title="LeaderBoard" >
                        <Menu.Item key="31">Individual
                  <Link to="/nav/IndividualLeaderBoard" />
                  </Menu.Item>
                        
                        <Menu.Item key="32">Team
                  <Link to="/nav/TeamLeaderboard" />
                  </Menu.Item>
                        
                      </SubMenu>
                      <Menu.Item key="4" icon={<TeamOutlined />}>
                        Teams
                        <Link to="/nav/Teams" />
                      </Menu.Item>
                      <Menu.Item key="5" icon={<CommentOutlined />} >
                        Forum
                        <Link to="/nav/forum" />
                      </Menu.Item>
                      <Menu.Item key="6" icon={<SearchOutlined />} >
                        Search
                        <Link to="/nav/Searchusers" />
                      </Menu.Item>
                      <Menu.Item key="7" icon={<ReconciliationOutlined />} >
                        Reports
                        <Link to="/nav/Reports" />
                      </Menu.Item>
                      {/* <Menu.Item key="link" icon={<LinkOutlined />}>
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                          Ant Design
                        </a>
                      </Menu.Item> */}

                                        
                        </Menu>
              </Sider>
                   
                        
              <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                <Route exact path="/nav/Dashboard" component={Dashboard} />
                <Route exact path ="/nav/StepsPage" component = {StepsPage} />
							  <Route exact path="/nav/Teams" component={Teams} />
                <Route exact path="/nav/Reports" component={Reports} />
                <Route exact path="/nav/TeamLeaderboard" component={Grouppositionlayout} />
                <Route exact path="/nav/Searchusers" component={Searchusers} />
                <Route exact path="/nav/IndividualLeaderBoard" component={Positionalayout} />
                              
              </Content>

              </Layout>
                <FooterComponent />
              </Layout>
              </Router>
            
        );
    }
}

export default Navigate