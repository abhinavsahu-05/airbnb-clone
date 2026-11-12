import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { UserDataContext } from '../context/UserContext';

function Login() {

let {serverUrl, loading, setLoading} = useContext(authDataContext)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  let {userData, setUserData} = useContext(UserDataContext)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
  

  const handleLogin = async(e)=>{
    setLoading(true)
      try {
        e.preventDefault()

        let result = await axios.post( serverUrl + "/api/auth/login", {
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
         <form action="" className=' h-125 max-w-125 w-[90%] rounded-2xl flex flex-col justify-center text-lg p-10 gap-7' onSubmit={handleLogin} >

            <h1 className='font-bold text-3xl mb-10 text-center'>Welcome to Airbnb </h1>
  
            <div className='flex flex-col gap-2 '>
                <label htmlFor="email" className='text-xl font-medium' > Email </label>
                <input
                className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
                type="text" id="email" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value) } value={email}/>
            </div>
            <div className='flex flex-col gap-2 relative'>
                <label htmlFor="pass" className='text-xl font-medium' > Password </label>
                <input
                className='font-small text-md p-1.5 overflow-hidden border-2 rounded-lg'
                type={show?"text":"password"} id="pass" placeholder='Enter you password' onChange={(e)=> setPassword(e.target.value) } value={password}/>
                { !show && <IoMdEye className='w-5.5 h-5.5 right-[8%] bottom-3 absolute cursor-pointer ' onClick={()=> setShow(prev => !prev )} />}
               { show && <IoMdEyeOff className='w-5.5 h-5.5 right-[8%] bottom-3 absolute cursor-pointer' onClick={()=> setShow(prev => !prev )} />}
            </div>

            <button className='font-bold text-xl bg-[#da0a65] py-2 text-center rounded-xl mt-10' disabled={loading} > { loading ? "Loading..." : "Login" } </button>
            <p className='text-[18px] text-red-700 text-center'>New User ? <span className='text-[19px] text-black text-center cursor-pointer' onClick={()=>{
          navigate("/signup")
         }} >Signup</span></p>
            
            
         </form>
        </div>
  )
}

export default Login
