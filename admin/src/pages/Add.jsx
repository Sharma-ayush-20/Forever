import { useState } from 'react'
import React from 'react'
import { assets } from '../assets/assets.js'
import axios from 'axios'
import { backendUrl } from '../App'

function Add({token}) {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      let response = await axios.post(backendUrl + `/api/product/add`, formData, {
        headers: {
          token
        }
      })

      console.log(response.data)

    } catch (error) {
      
    }
  }

  return (
    <div className="flex justify-center sm:px-10 md:px-20 lg:px-40 py-10">
      <form onSubmit={onSubmitHandler} className='flex flex-col w-full max-w-3xl items-center gap-4'>  

        {/* Image Upload */}
        <div className='w-full'>
          <p className='mb-2 font-semibold'>Upload Image</p>
          <div className='flex flex-wrap gap-3'>
            <label htmlFor="image1">
              <img className='w-20 h-20 object-cover rounded border' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden/>
            </label>
            <label htmlFor="image2">
              <img className='w-20 h-20 object-cover rounded border' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden/>
            </label>
            <label htmlFor="image3">
              <img className='w-20 h-20 object-cover rounded border' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden/>
            </label>
            <label htmlFor="image4">
              <img className='w-20 h-20 object-cover rounded border' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden/>
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className='w-full'>
          <p className='mb-2 font-semibold'>Product name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border rounded' type="text" placeholder='Type here' required/>
        </div>

        {/* Description */}
        <div className='w-full'>
          <p className='mb-2 font-semibold'>Product description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full px-3 py-2 border rounded' placeholder='Write content' required/>
        </div>

        {/* Category/Price */}
        <div className='flex flex-col sm:flex-row gap-4 w-full'>
          <div className='w-full sm:w-1/3'>
            <p className='mb-2 font-semibold'>Product category</p>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2 border rounded'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className='w-full sm:w-1/3'>
            <p className='mb-2 font-semibold'>Sub category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2 border rounded'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div className='w-full sm:w-1/3'>
            <p className='mb-2 font-semibold'>Product Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 border rounded' type="number" placeholder='25'/>
          </div>
        </div>

        {/* Sizes */}
        <div className='w-full'>
          <p className='mb-2 font-semibold'>Product Sizes</p>
          <div className='flex flex-wrap gap-3'> 
            {["S", "M", "L", "XL", "XXL"].map(size => (
              <div key={size} onClick={() =>
                setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])
              }>
                <p className={`px-3 py-1 rounded cursor-pointer border ${sizes.includes(size) ? "bg-pink-200" : "bg-slate-200"}`}>{size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller Checkbox */}
        <div className='flex items-center gap-2 mt-2 w-full'>
          <input onChange={() => setBestSeller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
          <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
        </div>

        {/* Submit Button */}
        <button type='submit' className='w-32 bg-black text-white py-3 rounded hover:bg-gray-800 transition-all duration-200 mt-4'>ADD</button>

      </form>
    </div>
  )
}

export default Add
