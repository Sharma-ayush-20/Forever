import React from 'react'
import { assets } from '../assets/assets.js'

function Add() {
  return (
    <form className='flex flex-col w-full items-center gap-3'>  
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>

          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image1' hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image2' hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image3' hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image4' hidden/>
          </label>

        </div>
      </div>

      <div>
        <p>Product name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
      </div>

    </form>
  )
}

export default Add