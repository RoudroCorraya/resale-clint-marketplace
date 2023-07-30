import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({Eachcategory}) => {
    const {category, catgegoryImg, PriceStart} = Eachcategory;
    return (
        <div className="card w-80 bg-base-100 shadow-xl my-6">
            
        <div className="card-body items-center text-center">
            <figure className="px-10 pt-10">
            <img src={catgegoryImg} alt="Shoes" className="rounded-xl" />
        </figure>
            <h2 className="card-title">Brand Name : {category} </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>Price Start : <strong>{PriceStart}</strong></p>
            
            <div className="card-actions">
                <Link to={`/categories/${category}`}><button className="btn btn-warning">See More</button></Link>
            </div>
        </div>

    </div>
    );
};

export default ProductDetails;