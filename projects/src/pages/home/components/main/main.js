import React from 'react';
import './main.css';

import Panel from '../../../../basicComponents/panel/Panel'

const Main = () => {

    return (
        <main id="main">
            <div className="content-seperator"/>
            <Panel classOverride="project-panel"/>
            <div className="content-seperator"/>
            <Panel classOverride="project-panel"/>
            <div className="content-seperator"/>
            <Panel classOverride="project-panel"/>
            <div className="content-seperator"/>
        </main>
    );

}

export default Main;
