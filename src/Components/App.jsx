import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const App = ({ app }) => {
    const { image, title, ratingAvg, downloads } = app;

    return (
            <Link to={`/${app.id}`}>
                <div className='p-4 rounded-xl drop-shadow-lg bg-white'>
                    <img className='rounded-2xl border-2 border-[#F1F5E8]' src={image} alt="no" />
                    <h2 className='my-4 font-semibold text-lg'>{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='flex gap-1 items-center bg-[#FFF0E1] text-[#FF8811] p-1 px-2 rounded-lg'><FaStar /> {ratingAvg}</p>
                        <p className='flex gap-1 items-center bg-[#F1F5E8] text-[#00D390] p-1 px-2 rounded-lg'><MdOutlineFileDownload />{downloads}</p>
                    </div>
                </div>
            </Link>

    );
};

export default App;