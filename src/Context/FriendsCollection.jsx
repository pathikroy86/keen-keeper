import React, { createContext, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

export const FriendContext = createContext();
const FriendsCollection = ({ children }) => {
    const [details, setDetails] = useState({});
    const handleFrndData = (current) => {
        setDetails(current);
    }

    const [commsType, setCommsType] = useState("");
    const [callLog, setCallLog] = useState([]);
    const handleContacted = (current, type) => {
        const logEntry = {
            friend: current,
            type: type,
            timestamp: new Date()
        };
        setCallLog([...callLog, logEntry]);
        setCommsType(type);
        toast.success(`${type} with ${current.name}`);
    }
    const data = {
        handleFrndData,
        details,
        handleContacted,
        callLog,
        commsType
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendsCollection;