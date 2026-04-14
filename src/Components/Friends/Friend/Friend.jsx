import React, { useContext } from 'react';
import { FriendContext } from '../../../Context/FriendsCollection';
import { useNavigate } from 'react-router';

const Friend = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status } = friend;
    const { handleFrndData } = useContext(FriendContext);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/details");
    }
    return (
        <div onClick={() => {
            handleFrndData(friend);
            handleNavigate();
        }} className='flex flex-col items-center shadow rounded py-5 space-y-3'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={picture} />
                </div>
            </div>
            <h5 className='text-xl font-semibold'>{name}</h5>
            <p className='text-[#64748B] text-xs'>{days_since_contact}d ago</p>
            <div className='flex space-x-3'>
                {
                    tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success text-xs">{tag}</div>)
                }
            </div>
            <div className={`badge badge-soft ${status === "almost due" ? 'badge-warning' : status === "on-track" ? 'badge-primary' : 'badge-error'}`}>{status}</div>
        </div>
    );
};

export default Friend;