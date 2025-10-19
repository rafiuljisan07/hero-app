import React, { useEffect, useState } from 'react';
import downImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import { toast, ToastContainer } from 'react-toastify';


const Overview = ({ targetedData }) => {
    const { image, title, companyName, size, reviews, ratingAvg, downloads } = targetedData;
    const [install, setInstall] = useState(false);

    const handleInstallBtn = () => {
        setInstall(true)
        
        const existingData = JSON.parse(localStorage.getItem('installed'));
        let updatedData = [];
        if (existingData) {
            const isDuplicate = existingData.some(a => a.id === targetedData.id);
            if (isDuplicate) return toast.info('Already Installed')
            updatedData = [...existingData, targetedData];
        } else {
            updatedData.push(targetedData)
        }
        localStorage.setItem('installed', JSON.stringify(updatedData));

        install ? '' : toast.success('Installed');
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 place-items-center gap-5 border-b-2 border-b-gray-300 pb-8'>
            <img src={image} alt="" />
            <div className='md:col-span-3'>
                <div className='border-b-2 border-b-gray-300'>
                    <h1 className='font-bold text-3xl'>{title}</h1>
                    <p className='text-gray-400 mb-6'>Developed by : <span className='text-violet-500 font-semibold'>{companyName}</span></p>
                </div>
                <div className='flex gap-4 md:gap-12 items-center py-6'>
                    <div>
                        <img src={downImg} alt="" />
                        <p className='text-gray-500 my-2'>Downloads</p>
                        <h1 className='text-4xl font-extrabold'>{downloads}M</h1>
                    </div>
                    <div>
                        <img src={ratingImg} alt="" />
                        <p className='text-gray-500 my-2'>Average Ratings</p>
                        <h1 className='text-4xl font-extrabold'>{ratingAvg}</h1>
                    </div>
                    <div>
                        <img src={reviewImg} alt="" />
                        <p className='text-gray-500 my-2'>Total Reviews</p>
                        <h1 className='text-4xl font-extrabold'>{reviews}</h1>
                    </div>
                </div>
                <button onClick={handleInstallBtn} className='btn btn-success font-semibold'>
                    {
                        install ? <p>Installed</p> : <p>Install Now<span>({size})</span></p>
                    }</button>
            </div>
        </div>
    );
};

export default Overview;