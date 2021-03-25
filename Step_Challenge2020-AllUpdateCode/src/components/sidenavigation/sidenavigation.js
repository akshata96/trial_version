import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './navbar.css';
//import {MenuOutlined}from '@ant-design/icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='title'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
     
    </>
  );
}

export default Navbar;