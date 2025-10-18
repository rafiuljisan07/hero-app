import React from 'react';

const Desk = ({targetedData}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-6' >Description</h1>
            <p className='text-lg text-gray-700'>{targetedData.description}</p>
        </div>
    );
};

export default Desk;