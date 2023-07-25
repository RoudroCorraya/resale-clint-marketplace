import React, { useEffect, useState } from 'react';
import category1 from '../../../../Assets/productCategory/category1_lg.jpg';
import samsung from '../../../../Assets/productCategory/Samsung-1.jpg';
import walton from '../../../../Assets/productCategory/wal3.jpg';
import ProductDetails from './ProductDetails';
import { useLoaderData } from 'react-router-dom';

const ProductCategory = () => {
    

    const categoryData = [
        {
            id: 1,
            category_id: 1,
            category: "LG",
            PriceStart : "BDT 24000",
            catgegoryImg: category1,
        },
        {
            id: 2,
            category_id: 2,
            category: "Samsung",
            PriceStart : "BDT 28000",
            catgegoryImg: samsung,
        },
        {
            id: 3,
            category_id: 3,
            category: "walton",
            PriceStart : "BDT 14000",
            catgegoryImg: walton,
        }
    ]
    return (

      <div className='grid grid-cols-3 gap-6'>
        {
            categoryData.map(category => <ProductDetails key={category.category_id} Eachcategory={category}></ProductDetails>)
        }
      </div>
    );
};

export default ProductCategory;