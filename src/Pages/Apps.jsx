import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import App from '../Components/App';
import NoAppFound from '../Components/NoAppFound';

const Apps = () => {
    const [apps] = useApps();
    const [search, setSearch] = useState('');
    const trim = search.trim().toLocaleLowerCase();
    const searchedApps = trim ? apps.filter(item => item.title.toLocaleLowerCase().includes(trim)) : apps

    return (
        <>
            {
                searchedApps.length > 0 ?
                    <div className='max-w-screen-xl mx-auto mt-20 '>
                        <div className='text-center'>
                            <h1 className='text-5xl font-bold mb-3'>Our All Applications</h1>
                            <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
                        </div>
                        <div className='flex justify-between items-center mt-6 mb-3'>
                            <p className='font-bold text-xl'>(132) Apps Found</p>
                            <label className="input bg-[#e7e4e42c]">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input onChange={(e) => setSearch(e.target.value)} defaultValue={search} type="search" placeholder="Search Apps" />
                            </label>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                            {
                                searchedApps.map(app => <App app={app} key={app.id} />)
                            }
                        </div>
                    </div>

                    :

                    <NoAppFound />
            }
        </>

    );
};

export default Apps;