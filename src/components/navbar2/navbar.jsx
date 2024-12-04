import { Link } from 'react-router-dom';

import { useState } from 'react';
import './navbar.css';
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import logo from '../assets/logo.ico';
export default function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>
                <Link to='/home'><img src={logo} style={{height: 60, width:90 , marginLeft:0}}></img></Link>
                </div>
                <div className='navbar-middle'>
                <ul>                      
                    <li className='navbar-sidebar-notvisible'><Link to='/team'>Team</Link></li>
                    <li className='navbar-sidebar-notvisible'><Link to='/gallery'>Gallery</Link></li>
                    <li className='navbar-sidebar-notvisible'><Link to='/projects'>Projects</Link></li>
                    <li className='navbar-sidebar-notvisible'><Link to='/aboutUs'>AboutUs</Link></li>
                </ul>
                </div>
                <div className='navbar-right'>
                    
                    <li className='sidebar-button' onClick={() => setSidebarVisible(true)}>
                        <FiAlignJustify style={{ height: '35px', width: '35px' }} />
                    </li>
                    <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                    <li><button onClick={() => setSidebarVisible(false)} className="close-sidebar"><MdCancel style={{ height: '20px', width: '20px' }} /></button></li>
                    <li><Link to='/team' onClick={() => setSidebarVisible(false)}>Team</Link></li>
                    <li><Link to='/gallery' onClick={() => setSidebarVisible(false)}>Gallery</Link></li>
                    <li><Link to='/projects' onClick={() => setSidebarVisible(false)}>Projects</Link></li>
                    <li><Link to='/aboutUs' onClick={() => setSidebarVisible(false)}>AboutUs</Link></li>
                </ul>
                </div>
            </nav>
        </>
    );
}
