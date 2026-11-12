import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';


function Signup() {

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    let {serverUrl, loading, setLoading} = useContext(authDataContext)
    let {userData, setUserData} = useContext(UserDataContext)

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = async(e)=>{
      setLoading(true)
      try {
        e.preventDefault()
        let result = await axios.post( serverUrl + "/api/auth/signup", {
          fullName,
          email,
          password
        }, {withCredentials: true})

        setLoading(false)
        setUserData(result.data)
        navigate("/")
        console.log(result);
        
      } catch (error) {
        setLoading(false)
        console.log(error);
        
      }
    }


  return (
    <div className='min-h-screen w-full flex justify-center items-center relative '>
      <div className='bg-[red] p-3 rounded-full text-xl sm:text-2xl shrink-0 cursor-pointer absolute top-[10%] left-[15%] ' onClick={()=> navigate("/")} >
        <span><FaArrowLeft /></span>
       </div>
     <form action="" className=' h-125 max-w-125 w-[90%] rounded-2xl flex flex-col justify-center text-lg p-10 ' onSubmit={handleSignup}>
        <h1 className='font-bold text-3xl mb-10 text-center'>Welcome to Airbnb </h1>
        <div className='flex flex-col gap-2'>
            <label htmlFor="username" className='text-xl font-medium' > Full Name </label>
            <input 
            className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg' required onChange={(e)=> setFullName(e.target.value)} value={fullName}
            type="text" id="username" placeholder='Enter your full name' />
        </div>
        <div className='flex flex-col gap-2 mt-7'>
            <label htmlFor="email" className='text-xl font-medium' > Email </label>
            <input
            className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg' required onChange={(e)=> setEmail(e.target.value)} value={email}
            type="email" id="email" placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2 relative mt-7'>
            <label htmlFor="pass" className='text-xl font-medium' > Password </label>
            <input
            className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg' required onChange={(e)=> setPassword(e.target.value)} value={password}
            type={show?"text":"password"} id="pass" placeholder='Enter you password'/>
            { !show && <IoMdEye className='w-5.5 h-5.5 right-[8%] bottom-3 absolute cursor-pointer ' onClick={()=> setShow(prev => !prev )}     />}
           { show && <IoMdEyeOff className='w-5.5 h-5.5 right-[8%] bottom-3 absolute cursor-pointer' onClick={()=> setShow(prev => !prev )} />}
        </div>
         <button className='font-bold text-xl bg-[#da0a65] py-2 text-center rounded-xl mt-10' disabled={loading} >{ loading ? "Loading..." : "SignUp" }</button>
       <div>
        
         <p className='text-[18px] text-red-700 text-center'>Already have an account ? <span className='text-[19px] text-black text-center cursor-pointer' onClick={()=>{
          navigate("/login")
         }} >Login</span></p>
       </div>
     </form>
    
    </div>
  )
}

export default Signup
