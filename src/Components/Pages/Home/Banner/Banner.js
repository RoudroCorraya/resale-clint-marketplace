import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../../../Assets/banner/rize1.PNG';
import banner2 from '../../../../Assets/banner/Captrefre2.PNG';
import banner3 from '../../../../Assets/banner/Last8fc64.webp';

import BannerDetails from './BannerDetails';
import './Banner.css';

const Banner = () => {
  const bannerData = [
      {
        id: 1,
        img: banner1,
        prev: 3,
        next: 2,
        
      },
      {
        id: 2,
        img: banner2,
        prev: 1,
        next: 3,
        
      },
      {
        id: 3,
        img: banner3,
        prev: 2,
        next: 1,
        
      },
  ]

 
  return (
    
      <div className='carousel w-full'>
      {
        bannerData.map(bannerItem => <BannerDetails key={ bannerItem.id} bannerItem={bannerItem}></BannerDetails>)
      }
    
    </div>
  );
};

export default Banner;