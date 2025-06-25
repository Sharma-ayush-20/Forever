import React from 'react'
import { assets } from '../assets/assets.js'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        {/* first policy  */}
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        {/* second policy  */}
        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide & days free return policy</p>
        </div>
        {/* third policy  */}
        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default OurPolicy