import React from 'react';
import { Link } from 'react-router';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col items-center space-y-5 md:space-y-10'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mt-5 md:mt-10'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
                relationships that matter most.</p>
            <Link className='bg-[#244D3F] text-white font-semibold btn'><FaPlus /> Add a Friend</Link>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-5 md:mb-10'>
                <div className='text-center pt-6 pb-4 border border-gray-200 rounded'>
                    <h4 className='text-[244D3F] text-3xl font-semibold'>10</h4>
                    <p className='text-lg text-[#64748B]'>Total Friends</p>
                </div>
                <div className='text-center pt-6 pb-4 border border-gray-200 rounded'>
                    <h4 className='text-[244D3F] text-3xl font-semibold'>3</h4>
                    <p className='text-lg text-[#64748B]'>On Track</p>
                </div>
                <div className='text-center pt-6 pb-4 border border-gray-200 rounded'>
                    <h4 className='text-[244D3F] text-3xl font-semibold'>6</h4>
                    <p className='text-lg text-[#64748B]'>Need Attention</p>
                </div>
                <div className='text-center pt-6 pb-4 border border-gray-200 rounded'>
                    <h4 className='text-[244D3F] text-3xl font-semibold'>12</h4>
                    <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;