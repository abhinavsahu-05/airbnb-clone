import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";

function ListingPage2() {
  return (
    <div className='min-h-screen w-full relative pb-10'>

      <div className='flex gap-10 relative'>
        <div className='top-6 sm:top-10 left-5 sm:left-10 md:left-20 lg:left-24 bg-[red] p-3 rounded-full text-2xl absolute'>
          <span><FaArrowLeft /></span>
        </div>

        <div className='absolute top-6 sm:top-10 right-5 sm:right-10 md:right-20 lg:right-24 bg-[red] p-2 rounded-3xl px-3 text-base sm:text-lg md:text-xl'>
          <h1>Set Your Category</h1>
        </div>
      </div>

      <div className='flex flex-col items-center pt-36 sm:pt-40 gap-5 px-4 sm:px-5'>

        <h1 className='font-bold text-xl sm:text-2xl text-center'>
          Which of the best describes your place ?
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 gap-y-6 sm:gap-y-8 w-full max-w-2xl mt-6 sm:mt-10'>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Villa</h3>
          </div>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <MdBedroomParent className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Apartment</h3>
          </div>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <MdOutlinePool className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Pool</h3>
          </div>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <GiWoodCabin className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Cabin</h3>
          </div>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Store</h3>
          </div>

          <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
            <IoBedOutline className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Room</h3>
          </div>

          <div className='col-span-2 sm:col-span-3 flex justify-center gap-3 sm:gap-5'>

            <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
              <FaTreeCity className='w-[30px] h-[30px] text-black' />
              <h3 className='text-md'>City</h3>
            </div>

            <div className='border-[2px] h-24 rounded-md flex flex-col items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px]'>
              <BiBuildingHouse className='w-[30px] h-[30px] text-black' />
              <h3 className='text-md'>House</h3>
            </div>

          </div>
        </div>

        <button className='font-bold text-lg sm:text-xl bg-[red] py-2 px-10 sm:px-16 md:px-[90px] text-center rounded-xl absolute  right-[5%] bottom-[20%] sm:mr-10'>
          Next
        </button>

      </div>
    </div>
  )
}

export default ListingPage2