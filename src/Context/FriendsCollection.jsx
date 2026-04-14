import React, { createContext } from 'react';

export const FriendContext = createContext();
const FriendsCollection = ({ children }) => {
    return (
        <FriendContext.Provider>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendsCollection;