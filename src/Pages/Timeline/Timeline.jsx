import React, { useContext, useState } from 'react';
import { FriendContext } from '../../Context/FriendsCollection';
import imgCall from '../../assets/call.png'
import imgText from '../../assets/text.png'
import imgVideo from '../../assets/video.png'

const Timeline = () => {
    const { callLog } = useContext(FriendContext);
    const [filterType, setFilterType] = useState('All');

    const filteredLog = callLog.filter(entry => {
        if (filterType === 'All') return true;
        return entry.type === filterType;
    });

    return (
        <div className='w-11/12 md:10/12 lg:9/12 mx-auto'>
            <h1 className='text-5xl font-bold mb-3 md:mb-5'>Timeline</h1>

            <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="select mb-3 md:mb-5"
            >
                <option value='All'>All</option>
                <option value='Call'>Call</option>
                <option value='Text'>Text</option>
                <option value='Video call'>Video</option>
            </select>

            <ul className='list bg-base-100 rounded-box shadow-md mb-3 md:mb-5'>
                {filteredLog.map((logEntry, index) => {
                    const { friend, type, timestamp } = logEntry;
                    const imgSrc = type === 'Call' ? imgCall
                        : type === 'Text' ? imgText
                            : imgVideo;

                    return (
                        <li key={index} className="list-row">
                            <div><img className="size-10 rounded-box" src={imgSrc} /></div>
                            <div>
                                <div><span className='font-semibold'>{type}</span> with {friend.name}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">
                                    {timestamp.toLocaleString()}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Timeline;