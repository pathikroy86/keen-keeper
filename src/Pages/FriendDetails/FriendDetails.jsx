import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendsCollection';

const FriendDetails = () => {
    const { details } = useContext(FriendContext);

    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/10 mx-auto'>
            <div>
                <div>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FriendDetails;