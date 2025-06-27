import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller); //bestseller === true -> bestProduct
        setBestSeller(bestProduct.slice(0,5));
    },[products])

  return (
    <div className='my-10'>

        {/* best seller title  */}
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate delectus temporibus similique
            </p>
        </div>

        {/* 5 best product details  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                ))
            }

        </div>
        
    </div>
  )
}

export default BestSeller