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

  return (
    <div>

      <div className='flex gap-10 relative'>
        <div className='top-[30px] sm:top-[50px] left-[20px] sm:left-[100px] bg-[red] p-3 rounded-full text-2xl absolute'>
          <span><FaArrowLeft /></span>
        </div>

        <div className='absolute top-[30px] sm:top-[50px] right-[20px] sm:right-[100px] bg-[red] p-2 rounded-3xl px-3 font-base text-lg sm:text-xl'>
          <h1>Setup Your Home</h1>
        </div>
      </div>

      <div className='min-h-screen w-full flex flex-col justify-center items-center mt-10 p-5'>

        <form
          action=""
          className='w-full max-w-2xl rounded-2xl flex flex-col text-lg p-5 sm:p-8 gap-5 overflow-auto'
        >

          <div className='flex flex-col gap-2'>
            <label htmlFor="title" className='text-xl font-medium'>Title</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="title"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="description" className='text-xl font-medium'>Description</label>
            <textarea
              className='font-small text-md px-7 py-3 overflow-hidden border-2 rounded-lg'
              id="description"
              rows="4"
            ></textarea>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image1" className='text-xl font-medium'>Image 1</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image1"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image2" className='text-xl font-medium'>Image 2</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image2"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="image3" className='text-xl font-medium'>Image 3</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="file"
              id="image3"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="rent" className='text-xl font-medium'>Rent</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="rent"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="city" className='text-xl font-medium'>City</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="city"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="landmark" className='text-xl font-medium'>Landmark</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="landmark"
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="category" className='text-xl font-medium'>Category</label>
            <input
              className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
              required
              type="text"
              id="category"
            />
          </div>

          <button className='font-bold text-lg bg-[red] py-2 px-10 text-center rounded-xl mt-5 self-start'>
            Next
          </button>

        </form>
      </div>
    </div>
  )
}

export default ListingPage1