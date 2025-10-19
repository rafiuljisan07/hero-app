import React, { useEffect, useState } from 'react';
import InstalledAppCard from '../Components/InstalledAppCard';

const Installation = () => {
    const [sortOrder, setSortOrder] = useState('none')
    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        const getFromLS = JSON.parse(localStorage.getItem('installed'));
        if (getFromLS) setInstalledApps(getFromLS);
    }, [])
    console.log(installedApps)

    return (
        <div className='max-w-screen-xl mx-auto mt-20 '>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-3'>Your Installed Apps</h1>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mt-6 mb-3'>
                <p className='font-bold text-xl'>(<span>{installedApps.length}</span>) Apps Found</p>
                <label>
                    <select
                        className='select select-bordered'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by Size</option>
                        <option value="size-ace">Low &gt; High</option>
                        <option value="size-desc">Low &gt; High</option>
                    </select>
                </label>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    installedApps.map(iApp => <InstalledAppCard iApp={iApp} key={iApp.id} />)
                }
            </div>
        </div>
    );
};

export default Installation;