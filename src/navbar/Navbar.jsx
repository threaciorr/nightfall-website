import React, { useState } from 'react';
import Headroom from 'react-headroom'
import * as RiIcons from "react-icons/ri";
import { Socials, Links } from './SidebarData'
import { Link } from "react-router-dom";
import { logo } from '../assets/index'
import { IconContext } from "react-icons";
import './navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
        <IconContext.Provider value={{ color: "#c5c5c5" }} >
            <Headroom>
                <nav>
                    <div className='nav'>
                        <ul className='nav_socials'>
                            {Socials.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item.path}>{item.icon}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="nav_logo"><a className='nav_logo-a' href="#hero"><img src={logo} alt="logo" /></a></div>
                        <ul className='nav_links'>
                            {Links.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item._id}>{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="nav_toggleBtn">
                            <Link to="#">
                                <RiIcons.RiMenu4Line onClick={showSidebar} />
                            </Link>
                        </div>
                    </div>
                </nav>
            </Headroom>
            <div className={sidebar ? 'drop_downMenu active' : 'drop_downMenu'} onClick={showSidebar}>
                <div className='drop_downMenu-nav'>
                    <div className="drop_links">
                        <ul>
                            {Links.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item._id}>{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="drop_socials">
                        <ul>
                            {Socials.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <a href={item.path}>{item.icon}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="closeBtn">
                    <Link to="#">
                        <RiIcons.RiCloseFill color="#0006aedd" />
                    </Link>
                </div>
                <div className="closeBtn2">
                    <Link to="#">
                        <RiIcons.RiCloseFill color="#0006aedd" />
                    </Link>
                </div>
            </div>
        </IconContext.Provider>
    </>
)
}

export default Navbar