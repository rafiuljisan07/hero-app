import React from 'react';
import appErrorImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const NoAppFound = ({setSearch}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 col-span-4 my-8'>
            <img src={appErrorImg} alt="" />
            <h1 className='text-5xl font-bold mt-5'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={() => setSearch('')} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 font-normal' to='/apps'>Go Back</button>
        </div>
    );
};

export default NoAppFound;