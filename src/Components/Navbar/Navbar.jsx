import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import image from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {

    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>

                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/" className="btn"><IoHomeOutline /> Home</NavLink></li>
                            <li><NavLink to="/timeline" className="btn"><MdOutlineWatchLater /> Timeline</NavLink></li>
                            <li><NavLink to="/stats" className="btn"><IoStatsChart /> Stats</NavLink></li>
                        </ul>

                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl"><img src={image} alt="logo" /></Link>
                </div>
                <div className="navbar-center">
                </div>
                <div className="navbar-end gap-2 hidden lg:flex">
                    <NavLink to="/" className="btn"><IoHomeOutline /> Home</NavLink>
                    <NavLink to="/timeline" className="btn"><MdOutlineWatchLater /> Timeline</NavLink>
                    <NavLink to="/stats" className="btn"><IoStatsChart /> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;