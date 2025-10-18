import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/apps'>Apps</NavLink>
                        <NavLink to='/installation'>Installation</NavLink>

                    </ul>
                </div>
                <Link className='flex items-center gap-1' to='/' >
                    <img className='h-10' src={logoImg} alt="" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="link-container font-medium flex gap-6">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink to='/installation'>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/rafiuljisan07' target='_blank' className="btn flex items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                    <FaGithub />
                    <span>Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;