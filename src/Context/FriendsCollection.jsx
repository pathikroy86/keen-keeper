import React, { createContext, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

export const FriendContext = createContext();
const FriendsCollection = ({ children }) => {
    const [details, setDetails] = useState({});
    const handleFrndData = (current) => {
        setDetails(current);
    }

    const [callLog, setCallLog] = useState([]);
    const handleContacted = (current, type) => {

        setCallLog([...callLog, current]);
        toast.success(`${type} with ${current.name}`);
        console.log(callLog)
    }
    const data = {
        handleFrndData,
        details,
        handleContacted,
        callLog
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendsCollection;