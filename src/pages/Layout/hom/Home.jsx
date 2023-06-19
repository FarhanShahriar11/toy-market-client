import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ToyGallery from '../../../components/ToyGallery/ToyGallery';
import ToysSellAboutUs from '../../../components/ToysSellAbout/ToysSellAboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToysSellAboutUs></ToysSellAboutUs>
            <Category></Category>
           
            <ToyGallery></ToyGallery>
        </div>
    );
};

export default Home;