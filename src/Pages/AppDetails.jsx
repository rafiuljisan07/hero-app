import React from 'react';
import { useParams } from 'react-router';
import Overview from '../Components/AppDetails/Overview';
import Rating from '../Components/AppDetails/Rating';
import Desk from '../Components/AppDetails/Desk';
import useApps from '../Hooks/useApps';
import Loading from '../Components/Loading';

const AppDetails = () => {
    const id = useParams();
    const [apps, loading] = useApps();

    if (loading) return <Loading />

    const targetedData = apps.find(app => app.id == id.id);
    return (
        <div className='max-w-screen-xl mx-auto p-3 md:p-0'>
            <Overview targetedData={targetedData} />
            <Rating targetedData={targetedData} />
            <Desk targetedData={targetedData} />
        </div>
    );
};

export default AppDetails;