import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Resume from '../Resume/Resume';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider />
            <AboutMe />
            <Resume />
            <Services />
            <ContactMe />
        </div>
    );
};

export default Home;