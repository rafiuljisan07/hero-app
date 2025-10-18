import React from 'react';
import heroImg from '../assets/hero.png'

const StatisticsBanner = () => {
    const stats = [
        {
            title: "Total Downloads",
            body: "29.6M",
            desk: "21% more than last month",
        },
        {
            title: "Total Reviews",
            body: "906k",
            desk: "2.46% more than last month",
        },
        {
            title: "Total Apps",
            body: "132+",
            desk: "31 more will Launch",
        },
    ];

    return (
        <>
            <div className='max-w-screen-sm mx-auto mt-8'>
                <img className='w-full' src={heroImg} alt="" />
            </div>
            <div className=' bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white flex flex-col justify-center items-center py-10'>
                <h2 className='text-5xl font-bold text-center'>Trusted By Millions, Build For You</h2>
                <div className='flex flex-col md:flex-row gap-10 text-center pt-7'>
                    {
                        stats.map((stat, i) =>
                            <div key={i}>
                                <p className='text-sm font-light text-gray-300'>{stat.title}</p>
                                <h1 className='text-6xl font-extrabold my-3'>{stat.body}</h1>
                                <p className='text-sm font-light text-gray-300'>{stat.desk}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default StatisticsBanner;