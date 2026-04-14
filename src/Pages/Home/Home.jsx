import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Friends from '../../Components/Friends/Friends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <hr className='text-gray-300 mb-5 md:mb-10' />
            <Friends></Friends>
        </div>
    );
};

export default Home;