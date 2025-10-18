import React from 'react';
import logoImg from '../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white flex flex-col items-center py-10'>
                <Link to='/'  className='flex items-center gap-1' >
                    <img className='h-10' src={logoImg} alt="" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</span>
                </Link>
                <div className='space-x-5 my-5'>
                    <Link to='/'>Home</Link>
                    <a href="">About Us</a>
                    <a href="">Terms & Policy</a>
                </div>
                <p className='font-light text-sm text-gray-400'>Copyright © 2025 - All right reserved by HERO.IO</p>
                <div className='flex gap-5 mt-5 text-3xl'>
                    <a href="https://www.facebook.com/rafiulislam.jisan.1" target='_blank'>
                    <FaFacebook/>
                    </a>
                    <a href="https://www.linkedin.com/in/rafiul-islam-jisan-99ba26332/" target='_blank'>
                    <FaLinkedinIn/>
                    </a>
                    <a href="https://github.com/rafiuljisan07" target='_blank' >
                    <FaGithub/>
                    </a>
                </div>
           
        </div>
    );
};

export default Footer;