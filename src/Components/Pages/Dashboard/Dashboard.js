import React from 'react';
import dashboard from '../../../Assets/dashboard/dashboard.jpg';

const Dashboard = () => {
    return (
        <div className='text-center'>
           
           <div className='w-full'>
            <img src={dashboard} alt='dashboard.jpg'/>
           </div>
           <h3 className='text-6xl text-yellow font-serif'>To DahsBoard</h3>
        </div>
    );
};

export default Dashboard;