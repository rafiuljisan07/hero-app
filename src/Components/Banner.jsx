import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto text-center'>
            <h1 className='text-7xl font-semibold'>We Build
                <br />
                <span className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-lg text-gray-500 mt-5 mb-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div>
                <a href='https://play.google.com/store/apps?hl=en' target='_blank' className='btn mr-4'>
                    <FaGooglePlay className='text-2xl' />
                    Google Play</a>
                <a href='https://www.apple.com/app-store/' target='_blank' className='btn'>
                    <FaAppStoreIos className='text-2xl' />
                    App Store</a>
            </div>
        </div>
    );
};

export default Banner;