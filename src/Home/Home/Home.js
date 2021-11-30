import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider />
            <AboutMe />
            <Resume />
        </div>
    );
};

export default Home;