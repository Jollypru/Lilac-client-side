import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import SingleFeature from './SingleFeature';

const Home = () => {
    return (
        <div className='min-h-screen'>
           <Banner></Banner>
           <Categories></Categories>
           <SingleFeature></SingleFeature>
        </div>
    );
};

export default Home;