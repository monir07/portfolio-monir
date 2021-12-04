import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Slider from '../Slider/Slider';
import Footer from '../../shared/Footer/Footer';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Slider />
            <AboutMe />
            <Resume />
            <Portfolio />
            <Services />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default Home;