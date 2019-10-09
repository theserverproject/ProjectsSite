import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

import Panel from '../../../../basicComponents/panel/Panel'

const Main = (props) => {

    let panels = [];

    props.projects.forEach((project) => {

        let buttonText = project.buttonText ? project.buttonText : "See a live demo!";

        let button = (
            project.projectsUrl ?
                <Link to={ project.projectsUrl } className="demo-link"><button className="demo-button">See a live demo!</button></Link>
            :
                <a href={ project.Url } className="demo-link"><button className="demo-button">{ buttonText }</button></a>
            );

        let panel = (
            <Panel classOverride="project-panel" id={ project.shortName.concat("-panel") }>
                <h2 className="description-header">{ project.longName }</h2>
                <p className="description">{ project.description }</p>
                { button }
            </Panel>
        );

        panels.push(panel);
        panels.push(<div className={ "content-seperator" }/>);
    });

    return (
        <main id="main">
            <div className="content-seperator"/>
            <div className="content-seperator"/>
            <Panel classOverride="project-panel" id='description-panel'>
                <h2 className="description-header">Projects</h2>
                <p className="description">
                    Hi there, welcome to my project's page!
                    This is the place where I (as you probably guessed)
                    display my projects for you!
                    <br/><br/>
                    But why did I do this? Well, I was in an interview, and
                    the interviewer told me that they had pulled a couple
                    of my projects off GitHub and got them running on their
                    machines.
                    <br/><br/>
                    But I'm the one making these project so that other people
                    can easily use them, so why on earth would I want to make
                    those people need to setup these projects on their own?
                    That exact reason is why this projects page (and TheServerProject
                    in general) was born.
                </p>
            </Panel>
            <div className="content-seperator"/>
            { panels }
            <Panel classOverride="project-panel" id="coming-soon-panel">
                <h2 className="description-header">Coming Soon!</h2>
                <p className="description">
                    I have lots of projects that I've worked on over the years
                    and my goal for this site is to display all of them. As such,
                    you should check back often to see if any new projects have
                    been ported!
                    <br/><br/>
                    If you would like to know exactly which projects are being
                    ported at any given time please look at the &nbsp;
                    <a href="https://github.com/theserverproject/ProjectsSite/issues/" target='_blank' rel="noopener noreferrer">issues</a>
                    &nbsp; page.
                    <br/><br/>
                    Know of a project of mine you would like to see here? Want to
                    suggest a project to me that will be displayed here? Go to the &nbsp;
                    <a href="https://github.com/theserverproject/ProjectsSite/issues/" target='_blank' rel="noopener noreferrer">issues</a>
                    &nbsp; page and create an issue, or send me an email to Ross-Alexandra@outlook.com!
                </p>
            </Panel>
            <div className="content-seperator"/>
            <div className="content-seperator"/>
        </main>
    );

}

export default Main;
