import React from 'react';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const Home = (props) => {
    return (
        <div className="page-content">
            <Navbar projects={ props.projects }/>
            <Main projects={ props.projects }/>
            <Footer/>
        </div>
    );
}


export default Home;
