import React from 'react';
import './navbar.css';

import Image from '../../../../basicComponents/image/Image';
import Dropdown from '../../../../basicComponents/dropdown/Dropdown';

const Navbar = () => {

    let dropdownItems = [];

    

    return (
        <header id="navbar">
            <div className='logo-box'>
                <Image classOverride={ 'logo'  } image='logo.png' imageLink='http://www.theserverproject.com' defaultText="Logo image not found."/>
            </div>
            <div className='title-box'>
                <h1 className='title-text'>The Projects</h1>
            </div>
            <div className='dropdown-box'>
                <Dropdown dropdownItems={ dropdownItems } classOverride='dropdown' dropdownTitleClassOverride='dropdown-text'>Projects List</Dropdown>
            </div>
        </header>
    );

}

export default Navbar;
