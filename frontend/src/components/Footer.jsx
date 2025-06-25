import React from 'react'
import { assets } from '../assets/assets.js'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            {/* img + para */}
            <div>
                <img src={assets.logo} alt="" className='w-32 mb-5'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ea ex? Porro quis aliquam odio sequi tenetur non consectetur sed dolore iusto, repellendus quia. Iure quia sunt voluptatem eius similique?
                </p>
            </div>

            {/* details 1  */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* details 1  */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

        </div>

        {/* copyright  */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer