import React from 'react';
import './navbar.css';

import Image from '../../../../basicComponents/image/Image';
import Dropdown from '../../../../basicComponents/dropdown/Dropdown';

const Navbar = (props) => {

    let dropdownItems = [];

    props.projects.forEach((project) => {
        dropdownItems.push(<a key={ project.shortName } href={ project.serverLink } className="dropdown-item">{ project.shortName }</a>);
    });

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
