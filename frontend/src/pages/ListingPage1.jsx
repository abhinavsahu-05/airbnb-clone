import React, { useContext } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../context/ListingContext';

function ListingPage1() {
 
let navigate = useNavigate()

let {
  title, setTitle, description, setDescription, frontendImage1, setFrontendImage1, frontendImage2, setFrontendImage2, frontendImage3, setFrontendImage3, backendImage1, setBackendImage1, backendImage2, setBackendImage2, backendImage3, setBackendImage3, rent, setRent, city, setCity, landmark, setLandmark, category, setCategory
} = useContext(listingDataContext)

const handleImage1=(e)=>{
    let file = e.target.files[0]
    setBackendImage1(file)
    setFrontendImage1(URL.createObjectURL(file))
}

const handleImage2=(e)=>{
    let file = e.target.files[0]
    setBackendImage2(file)
    setFrontendImage2(URL.createObjectURL(file))
}

const handleImage3=(e)=>{
    let file = e.target.files[0]
    setBackendImage3(file)
    setFrontendImage3(URL.createObjectURL(file))
}

  return (
    <div>

      <div className='w-full flex justify-between items-center px-5 sm:px-10 md:px-20 pt-7 sm:pt-10 gap-3'>
        <div className='bg-[red] p-3 rounded-full text-xl sm:text-2xl shrink-0 cursor-pointer'>
          <span><FaArrowLeft /></span>
        </div>

        <div className='bg-[red] p-2 rounded-3xl px-3 text-base sm:text-lg md:text-xl text-center'>
          <h1>Setup Your Home</h1>
        </div>
      </div>

      <div className='min-h-screen w-full flex flex-col justify-center items-center mt-2 p-2'>

        <form
          action=""
          className='w-full max-w-2xl rounded-2xl flex flex-col text-lg p-5 sm:p-8 gap-5 overflow-auto'
          onSubmit={(e)=>{e.preventDefault()
             navigate("/listingpage2")}}
        >

          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-xl font-medium'>Title</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="title"
              onChange={(e)=>setTitle(e.target.value)}
              value={title} placeholder='_bhk house or best title'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="description" className='text-xl font-medium'>Description</label>
            <textarea
              className='font-small text-md px-7 py-3 overflow-hidden border-2 rounded-lg'
              id="description"
              rows="4"
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image1" className='text-xl font-medium'>Image 1</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image1"
              onChange={handleImage1}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image2" className='text-xl font-medium'>Image 2</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image2"
              onChange={handleImage2}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image3" className='text-xl font-medium'>Image 3</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image3"
              onChange={handleImage3}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="rent" className='text-xl font-medium'>Rent</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="rent"
              onChange={(e)=>setRent(e.target.value)}
              value={rent} placeholder='Rs._____/day'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="city" className='text-xl font-medium'>City</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="city"
              onChange={(e)=>setCity(e.target.value)}
              value={city} placeholder='city,country'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="landmark" className='text-xl font-medium'>Landmark</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="landmark"
              onChange={(e)=>setLandmark(e.target.value)}
              value={landmark}
            />
          </div>

          {/* <div className='flex flex-col gap-2'>
            <label htmlFor="category" className='text-xl font-medium'>Category</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="category"
              onChange={(e)=>setCategory(e.target.value)}
              value={category}
            />
          </div> */}

          <button className='font-bold text-lg bg-[red] py-2 px-20 text-center rounded-xl mt-5 self-start transition-transform active:scale-95 duration-300 '>
            Next
          </button>

        </form>
      </div>
    </div>
  )
}

export default ListingPage1
