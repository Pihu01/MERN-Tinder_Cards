import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './images/logo.PNG';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="Large" className="header_icon"/>
            </IconButton>
            
            <img className="header_logo" src={logo} alt="logo"/>
            <IconButton>
            <ForumIcon fontSize="Large" className="header_icon"/>
            </IconButton>
        </div>
        
    )
}

export default Header
