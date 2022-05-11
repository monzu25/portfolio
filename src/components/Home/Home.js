import React from 'react';
import AboutMe from '../AboutMe';
import Banner from '../Banner';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';
import Prices from '../Prices';
import Projects from '../Projects';
import Services from '../Services';
import Skills from '../Skills';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />

            <AboutMe />
            <Projects />
            <Services />
            <Contact />

            <Footer></Footer>
        </div>
    );
};

export default Home;