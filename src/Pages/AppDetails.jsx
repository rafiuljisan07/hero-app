import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Overview from '../Components/AppDetails/Overview';
import Rating from '../Components/AppDetails/Rating';
import Desk from '../Components/AppDetails/Desk';

const AppDetails = () => {
    const id = useParams();
    const apps = useLoaderData()
    const targetedData = apps.find(app => app.id == id.id);
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Overview targetedData={targetedData} />
            <Rating targetedData={targetedData} />
            <Desk targetedData={targetedData} />
        </div>
    );
};

export default AppDetails;