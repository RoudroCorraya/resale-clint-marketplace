import React from 'react';
import offering from '../../../../Assets/offers/promo3.webp'
import { Link } from 'react-router-dom';

const OffersDetails = () => {
    return (
        <div className="hero bg-base-200 my-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className='-mt-24' src={offering} alt='' />
                </div>
                <div className='ml-6'>
                    <h1 className="text-5xl font-bold">Don't miss out on special offers</h1>
                    <p className="py-6">Register to receive news about the latest, savings combos, discount codes....</p>
                    <div>
                        <ul>
                            <li>

                                <Link to='/'>Ocational Discount 30%</Link>
                            </li>
                            <li>
                                <Link to='/'>Regular Discount 10%</Link>
                            </li>
                            <li>
                                <Link to='/'>savings 5%</Link>
                            </li>

                        </ul>
                    </div>
                    <button className="btn btn-warning my-3">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default OffersDetails;