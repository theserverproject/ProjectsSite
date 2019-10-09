import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import Image from '../../../../basicComponents/image/Image';
import Dropdown from '../../../../basicComponents/dropdown/Dropdown';

const Navbar = (props) => {

    let dropdownItems = [];

    props.projects.forEach((project) => {
        let link = (
            project.projectsUrl ?
                <Link key={ project.shortName } to={ project.projectsUrl } className="dropdown-item">{ project.shortName }</Link>
            :
                <a key={ project.shortName } href={ project.Url } className="dropdown-item">{ project.shortName }</a>
            );

        dropdownItems.push(link);
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
