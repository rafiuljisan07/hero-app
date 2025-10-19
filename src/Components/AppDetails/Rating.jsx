import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rating = ({ targetedData }) => {
    const { ratings } = targetedData
    return (
        <div className='border-b-2 border-b-gray-300'>
        <h1 className='text-2xl font-bold mt-8'>Ratings</h1>
            <div className='w-full mx-auto p-5 h-96'>
                <ResponsiveContainer>
                    <BarChart
                        data={ratings}
                    >
                        <CartesianGrid strokeDasharray="6 6" />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='count' fill='#9257EF' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Rating;