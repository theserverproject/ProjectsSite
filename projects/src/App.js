import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';

// Import css classes
import './App.css';
import './AppVars.css';

const App = () => {

    let projects = [
        {
            'shortName': 'TheServerProject',
            'longName': 'The Server Project',
            'description': (
                            <React.Fragment>
                                The server project is as simple as it sounds.
                                It is a home-owned server being used for what
                                servers are used best for: serving stuff. The
                                website you're looking at right now is served
                                off of it.
                                <br/><br/>
                                Want to learn more about the server project?
                                Click the button below to see its homepage!
                            </React.Fragment>
                           ),
            'github': 'https://github.com/theserverproject/BaseSite',
            'Url': 'http://www.theserverproject.com',
            'projectsUrl': '',
            'buttonText': 'Take me to the home page!',
        },
    ];

    return (
        <Switch>
            <Route path="/test">
                <p>
                    hello. Wecome to the secret testing path. Nothing fun lives
                    here, you probably just want to go back.
                </p>
            </Route>
            <Route path="/">
                <Home projects={ projects }/>
            </Route>
        </Switch>
    );
}

export default App;
