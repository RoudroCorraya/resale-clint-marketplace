import React from 'react';
import { Link } from 'react-router-dom';


const BannerDetails = ({bannerItem}) => {
    const {img, id, prev, next} = bannerItem;
    return (
        
        <div id={`slide${id}`} className="carousel-item relative w-full">
           <div className='overlay'></div>
          <img src={img} className="w-full rounded-lg" alt='' />
         
          <div className="absolute flex justify-between transform -translate-y-1/2 right-24 top-1/2">
            <h3 className='lg:text-6xl sm:text-xl md:text-3xl text-white text-right'>Resale <br/>Your Refrigerator <br/> with Reasonable Price</h3>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div> 
    );
};

export default BannerDetails;