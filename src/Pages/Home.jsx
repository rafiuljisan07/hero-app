import React from 'react';
import Banner from '../Components/Banner';
import StatisticsBanner from '../Components/StatisticsBanner';
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import Loading from '../Components/Loading';
import AppCard from '../Components/AppCard';

const Home = () => {
    const [apps, loading] = useApps()
    const featuredApps = apps.slice(0, 8);

    if (loading) return <Loading />
    return (
        <>
            <Banner />
            <StatisticsBanner />
            <div className='max-w-screen-xl mx-auto mt-20 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-3'>Trending Apps</h1>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
                    {
                        featuredApps.map(app => <AppCard app={app} key={app.id} />)
                    }
                </div>
                <Link to='/apps' className='btn mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 font-normal' >Show All</Link>
            </div>
        </>
    );
};

export default Home;