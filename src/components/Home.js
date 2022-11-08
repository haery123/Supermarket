import React from 'react';
import Brands from './Home/Brands';
import Carousel from './Home/Carousel';
import Products from './Home/Products';
import Topbrands from './Home/Topbrands';
import Topslider from './Home/Topslider';
const Home = () => {
    
    return (
        <>
        <Topslider />
        <Topbrands />
        <Carousel />
        <Brands />
        <Products />

    </>
		
    );
};

export default Home;