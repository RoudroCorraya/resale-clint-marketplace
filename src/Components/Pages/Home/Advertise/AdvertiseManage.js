import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Advertice from './Advertice';

const AdvertiseManage = () => {
    const { advertise } = useContext(AuthContext);
    return (
        <div>
            {
                advertise.length > 0 ? <h3 className='text-center text-3xl font-semibold my-6'>Advertise Section</h3>:
                <h3 className='text-center text-3xl hidden font-semibold my-6'>Advertise Section</h3>
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-8'>

                {

                    advertise.map(p => <Advertice key={p._id} advertiseInfo={p}></Advertice>)

                }
            </div>
        </div>
    );
};

export default AdvertiseManage;