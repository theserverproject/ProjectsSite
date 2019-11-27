import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';

// Import css classes
import './App.css';
import './AppVars.css';

const App = () => {

    let projects = [
        {
            'shortName': 'GitHub',
            'longName': 'My GitHub',
            'description': (
                    <React.Fragment>
                        For a full list of all the projects that I've worked on
                        You can go to my GitHub!
                        <br/><br/>
                        If you see a project there that you would like to see
                        hosted here (with a front-end to boot) please create
                        an issue on this site's GitHub! Just click the
                        GitHub logo in the bottom-right corner.
                    </React.Fragment>
                ),
                'github': 'https://github.com/Ross-Alexandra',
                'Url': 'https://github.com/Ross-Alexandra',
                'projectsUrl': '',
                'buttonText': 'Check out my GitHub',
        }, {
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
        }, {
            'shortName': 'TourneyGen',
            'longName': 'TourneyGen',
            'description': (
                    <React.Fragment>
                        TourneyGen is a league-management website. You can
                        create a league, and teams, then have those teams
                        compete in matches and tournaments!
                        <br/><br/>
                        We will keep track of your team's ELO, win/loss,
                        and other key details for comparing their relative
                        skill.
                    </React.Fragment>
                ),
            'github': '',
            'Url': 'http://tourneygen.theserverproject.com',
            'projectsUrl': '',
            'buttonText': 'Sign up and try for yourself!',
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
