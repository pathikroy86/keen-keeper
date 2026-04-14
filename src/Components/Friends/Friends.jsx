import React from 'react';
import { useLoaderData } from 'react-router';
import Friend from './Friend/Friend';

const Friends = () => {
    const data = useLoaderData();
    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto mb-5 md:mb-10'>
            <h2 className='text-2xl font-semibold mb-3'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    data.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;