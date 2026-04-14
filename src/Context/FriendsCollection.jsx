import React, { createContext, useState } from 'react';
import { Link } from 'react-router';

export const FriendContext = createContext();
const FriendsCollection = ({ children }) => {
    const [details, setDetails] = useState({});
    const handleFrndData = (current) => {
        setDetails(current);
    }
    const [selected, setSelected] = useState([]);
    const handleDetails = (current) => {
        const isAvailable = selected.find(friend => current.id == friend.id);
        if (isAvailable) {
            alert("already available");
            return;
        }
        else {
            setSelected([...selected, current]);
        }
    }

    const data = {
        handleFrndData,
        handleDetails,
        selected,
        details
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendsCollection;