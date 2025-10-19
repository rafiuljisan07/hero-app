import React from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';

const InstalledAppCard = ({ iApp, setInstalledApps }) => {
    console.log(iApp)

    const handleUninstall = () => {
        const getFromLS = JSON.parse(localStorage.getItem('installed'));
        const updatedList = getFromLS.filter(a => a.id !== iApp.id);
        setInstalledApps(updatedList)
        localStorage.setItem('installed', JSON.stringify(updatedList));
        toast.info('Uninstalled')
    }
    return (
        <div className='bg-white p-3 rounded-xl flex justify-between items-center'>
            <div className='flex gap-5' >
                <img className='w-20 rounded-lg overflow-hidden' src={iApp.image} alt="" />
                <div className='flex flex-col justify-between py-2'>
                    <h1>{iApp.title}</h1>
                    <div className='flex'>
                        <p className='flex gap-1 items-center text-[#FF8811] p-1 text-xs rounded-lg'><FaStar /> {iApp.ratingAvg}</p>
                        <p className='flex gap-1 items-center  text-[#00D390] p-1 text-xs rounded-lg'><MdOutlineFileDownload />{iApp.downloads} M</p>
                        <p className='flex gap-1 items-center text-gray-500 p-1 text-xs rounded-lg'>{iApp.size}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleUninstall} className='btn btn-success font-semibold'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledAppCard;