import React, { useContext } from 'react';
import { FriendContext } from '../../Context/FriendsCollection';
import { PiBellSimpleZBold } from "react-icons/pi";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";

const FriendDetails = () => {
    const { details, handleContacted } = useContext(FriendContext);
    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = details;

    const longFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/10 mx-auto my-5 md:my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-1 row-span-3 space-y-3'>
                    <div className='flex flex-col items-center px-3 py-5 shadow space-y-2'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={picture} />
                            </div>
                        </div>
                        <h6 className='text-xl font-semibold'>{name}</h6>
                        <div className={`badge rounded-full ${status === "ovedue" ? 'badge-error' : status === "almost due" ? 'badge-warning' : 'badge-primary'
                            }`}>{status}</div>
                        <br />
                        <div className='space-x-3'>
                            {
                                tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success rounded-full">{tag}</div>)
                            }
                        </div>

                        <p className='text-[#64748B] font-medium text-center'>"{bio}"</p>
                        <p className='text-sm text-[#64748B]'>Email: {email}</p>
                    </div>
                    <div className='btn btn-block'><PiBellSimpleZBold /> Snooze 2 Weeks</div>
                    <div className='btn btn-block'><LuArchive /> Archive</div>
                    <div className='btn btn-block text-red-400'><RiDeleteBin5Line /> Delete</div>
                </div>
                <div className='col-span-2 grid md:grid-rows-3 gap-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 row-span-1'>
                        <div className='py-5 shadow text-center'>
                            <h6 className='text-3xl text-[#244D3F] font-semibold'>{days_since_contact}</h6>
                            <p className='text-[#64748B] text-lg'>Days Since Contact</p>
                        </div>
                        <div className='py-5 shadow text-center'>
                            <h6 className='text-3xl text-[#244D3F] font-semibold'>{goal}</h6>
                            <p className='text-[#64748B] text-lg'>Goal (Days)</p>
                        </div>
                        <div className='py-5 shadow text-center'>
                            <h6 className='text-3xl text-[#244D3F] font-semibold'>{longFormatter.format(new Date(next_due_date))}</h6>
                            <p className='text-[#64748B] text-lg'>Next Due</p>
                        </div>
                    </div>
                    <div className='px-5 py-5 shadow rounded row-span-1'>
                        <div className='flex justify-between'>
                            <p className='text-[#244D3F] text-xl font-medium mb-5'>Relationship Goal</p>
                            <div className='btn btn-xs text-sm text-[#B1B2B5]'>Edit</div>
                        </div>
                        <p className='text-[#64748B] text-lg'>Contact every <span className='font-semibold'>{goal} days</span></p>
                    </div>
                    <div className='shadow px-2 py-5 row-span-1'>
                        <p className='text-[#244D3F] text-xl font-medium mb-5'>Quick Check-In</p>
                        <div className='grid grid-cols-3 gap-5'>
                            <div onClick={() => handleContacted(details, "Call")} className='btn btn-xl flex flex-col h-full'>
                                <p><BiPhoneCall /></p>
                                <p>Call</p>
                            </div>
                            <div onClick={() => handleContacted(details, "Text")} className='btn btn-xl flex flex-col h-full'>
                                <p className='pt-3'><BsChatLeftText /></p>
                                <p className='pb-2'>Text</p>
                            </div>
                            <div onClick={() => handleContacted(details, "Video call")} className='btn btn-xl flex flex-col h-full'>
                                <p className='mt-2'><IoVideocamOutline /></p>
                                <p className='mb-2'>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;