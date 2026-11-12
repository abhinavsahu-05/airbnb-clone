
import React, { useContext } from 'react'
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
import { listingDataContext } from '../context/ListingContext';
import { useNavigate } from 'react-router-dom';

function ListingPage2() {

const navigate = useNavigate()
let {category, setCategory} = useContext(listingDataContext)

  return (
    <div className='min-h-screen w-full relative pb-10'>

      <div className='flex gap-10 relative'>
        <div className='top-6 sm:top-10 left-5 sm:left-10 md:left-20 lg:left-24 bg-[red] p-3 rounded-full text-2xl absolute' onClick={()=> navigate("/listingpage1")} >
          <span><FaArrowLeft /></span>
        </div>

        <div className='absolute top-6 sm:top-10 right-5 sm:right-10 md:right-20 lg:right-24 bg-[red] px-5 py-3 rounded-3xl px-3 text-base sm:text-lg md:text-xl text-white'>
          <h1>Set Your Category</h1>
        </div>
      </div>

      <div className='flex flex-col items-center pt-36 sm:pt-40 gap-5 px-4 sm:px-5'>

        <h1 className='font-bold text-xl sm:text-2xl text-center'>
          Which of the best describes your place ?
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 gap-y-6 sm:gap-y-8 w-full max-w-2xl mt-6 sm:mt-10'>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="villa" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("villa")} >
            <GiFamilyHouse className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Villa</h3>
          </div>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="farmhouse" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("farmhouse")} >
            <MdBedroomParent className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Farm House</h3>
          </div>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="poolhouse" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("poolhouse")}>
            <MdOutlinePool className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Pool House</h3>
          </div>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="rooms" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("rooms")}>
            <GiWoodCabin className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Rooms</h3>
          </div>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="flat" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("flat")}>
            <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>Flat</h3>
          </div>

          <div className={`border-[2px] h-24 rounded-md flex flex-col items-center cursor-pointer justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="pg" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("pg")}>
            <IoBedOutline className='w-[30px] h-[30px] text-black' />
            <h3 className='text-md'>PG</h3>
          </div>

          <div className='col-span-2 sm:col-span-3 flex justify-center gap-3 sm:gap-5'>

            <div className={`border-[2px] h-24 rounded-md flex flex-col cursor-pointer items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="cabins" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("cabins")}>
              <FaTreeCity className='w-[30px] h-[30px] text-black' />
              <h3 className='text-md'>Cabins</h3>
            </div>

            <div className={`border-[2px] h-24 rounded-md flex flex-col cursor-pointer items-center justify-center text-[16px] border-gray-400 hover:border-gray-500 w-full max-w-[200px] ${category=="shops" ? "border-[3px] border-gray-500" : ""}`} onClick={(e)=> setCategory("shops")}>
              <BiBuildingHouse className='w-[30px] h-[30px] text-black' />
              <h3 className='text-md'>Shops</h3>
            </div>

          </div>
        </div>

         <button className='font-bold text-lg sm:text-xl bg-[red] py-2 mr-42 px-10 sm:px-16 md:px-[90px] text-center rounded-xl mt-2  self-end transition-transform active:scale-95 duration-300 ' onClick={()=> navigate("/listingpage3")} disabled={!category}>
         Next
       </button>

      </div>
    </div>
  )
}

export default ListingPage2
