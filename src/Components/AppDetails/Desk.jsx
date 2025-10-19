import React from 'react';
import { Link } from 'react-router';

const Desk = ({targetedData}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-6' >Description</h1>
            <p className='text-lg text-gray-700'>{targetedData.description}</p>
            <Link className='mt-5 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white' to='/'>Home</Link>
        </div>
    );
};

export default Desk;