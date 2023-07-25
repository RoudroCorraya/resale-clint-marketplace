import React from 'react';

const Advertice = ({ advertiseInfo }) => {
    const { model, category, productImg } = advertiseInfo;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='text-center'>
                <div className="avatar indicator">
                    <span className="indicator-item badge badge-secondary">20% Discount</span>
                    <div className="w-20 h-20 rounded-lg">
                        <img src={productImg} alt=''/>
                    </div>
                </div>
                </div>
               <div className='text-center'>
               <h2 className="text-4xl mx-auto">{category}</h2>
                <p>{model}</p>
               </div>
            </div>
            <figure><img src={productImg} alt="Shoes" /></figure>
        </div>
    );
};

export default Advertice;