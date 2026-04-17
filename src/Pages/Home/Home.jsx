import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Friends from '../../Components/Friends/Friends';

const fetchData = async () => {
    const res = await fetch('/friends-data.json');
    return res.json();
}
const Home = () => {
    const bookResponse = fetchData();
    return (
        <div>
            <Banner></Banner>
            <hr className='text-gray-300 mb-5 md:mb-10' />
            <Suspense fallback={<div className="loading loading-bars loading-xl text-center"></div>}>
                <Friends bookResponse={bookResponse}></Friends>
            </Suspense>

        </div>
    );
};

export default Home;