import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const App = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app;
    return (
        <div className='p-4 rounded-lg drop-shadow-lg bg-white'>
            <img className='rounded-md border-2 border-gray-300' src={image} alt="no" />
            <h2 className='my-4 font-semibold text-lg'>{title}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811] p-1 px-2 rounded-lg'><FaStar/> {ratingAvg}</p>
                <p className='flex gap-1 items-center bg-[#F1F5E8] text-[#00D390] p-1 px-2 rounded-lg'><MdOutlineFileDownload />{downloads}</p>
            </div>
        </div>
    );
};

export default App;