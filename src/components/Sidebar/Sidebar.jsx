/*import React, { useState } from 'react'
import'./Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from "../Data/Data";

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
        
        <div className="logo">
            <img src={Logo} alt="" />
            
        </div>
       
        <div className="menu">
            {SidebarData.map((item, index) =>{
                return (
                    <div className={selected===index? 'menuItem active': 'menuItem'}
                       key={index}
                       onClick={()=> setSelected(index)} 
                    >
                       <item.icon />
                       <span>{item.heading}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar;*/
import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../Data/Data';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
  
    return (
        <div className="Sidebar">
            {/* Logo */}
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            
            {/* Menu */}
            <div className="menu">
                {SidebarData.map((item, index) => (
                    <NavLink
                        to={item.path}
                        activeClassName="active"
                        className={selected === index ? 'menuItem active' : 'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <item.icon />
                        <span>{item.heading}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
