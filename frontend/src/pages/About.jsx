import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl pt-8 text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi dolorum esse consectetur possimus aspernatur niam neque nisi deserunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo autem nobis similique sapiente eveniet. Id cumque tempora necessitatibus asperiores commodi quia ab. Earum soluta esse eos et. Quasi, quam totam?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eos quibusdam rerum quam facere ea expedita tempora sed aspernatur, dolor odit! Cum, ex quas minus voluptates voluptate nostrum ut quos?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quasi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quasi!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quasi!</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About