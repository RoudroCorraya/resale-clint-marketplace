import React from 'react';
import { Link } from 'react-router-dom';

const BannerDetails = ({bannerItem}) => {
    const {img, id, prev, next} = bannerItem;
    return (
        
        <div id={`slide${id}`} className="carousel-item relative w-full">
          <img src={img} className="w-full" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 right-24 top-1/2 overlay">
            {/* <h3 className='text-6xl'>Resale Your Refrigerator <br/> with Reasonable Price</h3> */}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div> 
    );
};

export default BannerDetails;