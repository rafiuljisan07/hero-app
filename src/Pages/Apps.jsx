import React from 'react';
import useApps from '../Hooks/useApps';

const Apps = () => {
    const [apps] = useApps();
    return (
        <div className='max-w-screen-xl mx-auto mt-20 flex flex-col items-center'>
            <div>
                <h1 className='text-5xl font-bold mb-3'>Our All Applications</h1>
                <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between'>
                <p>(132) Apps Found</p>
                <label className="input">
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
                    <input type="search" placeholder="Search Apps" />
                </label>
            </div>
            <div>
                {
                    apps.map
                }
            </div>
        </div>
    );
};

export default Apps;