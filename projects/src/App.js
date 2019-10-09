import React from 'react';
import Navbar from './pages/home/components/navbar/navbar';
import Main from './pages/home/components/main/main';
import Footer from './pages/home/components/footer/footer';

// Import css classes
import './App.css';
import './AppVars.css';

function App() {

    let projects = [
        {
            'shortName': 'TheServerProject',
            'longName': 'The Server Project',
            'description': "TBD",
            'github': 'https://github.com/theserverproject/BaseSite',
            'serverLink': 'http://www.theserverproject.com',
        },
    ];

    return (
        <div className="page-content">
            <Navbar projects={ projects }/>
            <Main projects={ projects }/>
            <Footer/>
        </div>
    );
}

export default App;
