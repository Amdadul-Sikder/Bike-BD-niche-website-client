import React from 'react';
import Footer from '../Shared/Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;