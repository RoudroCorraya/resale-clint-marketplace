import React from 'react';

import category1_main from '../../../Assets/productCategory/lg-1.webp';
import lg from '../../../Assets/productCategory/lg2.jpg';
import lg3 from '../../../Assets/productCategory/lg3.webp';
import CategoryDetails from './CategoryDetails';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';



const Category = () => {
 
    
    const categoryData = useLoaderData();
    console.log('cheaking',categoryData);
   
    
    return (
        <div className='text-center'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-4'>
            
            {
                categoryData.map(category=> <CategoryDetails key={category._id} category={category}></CategoryDetails>)
            }
            
        </div>
        </div>
    );
};

export default Category;