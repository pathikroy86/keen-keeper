import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendsCollection';
import img from '../../assets/call.png'

const Timeline = () => {
    const { callLog } = useContext(FriendContext);
    console.log(callLog)
    return (
        <div className='w-11/12 md:10/12 lg:9/12 mx-auto'>
            <h1>Timeline</h1>
            <select defaultValue="Pick a color" className="select">
                <option disabled={true}>Filter timeline</option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
            </select>
            <ul className='list bg-base-100 rounded-box shadow-md'>
                {callLog.map(call => <li className="list-row">
                    <div><img className="size-10 rounded-box" src={img} /></div>
                    <div>
                        <div>{call.name}</div>
                        <div className="text-xs uppercase font-semibold opacity-60"> <Date></Date></div>
                    </div>
                </li>)}
            </ul>

        </div>
    );
};

export default Timeline;