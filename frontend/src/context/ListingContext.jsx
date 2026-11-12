import React, { createContext } from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const listingDataContext = createContext()


function ListingContext({children}) {
let [title, setTitle] = useState("")
let [description, setDescription] = useState("")
let [frontendImage1, setFrontendImage1] = useState("")
let [frontendImage2, setFrontendImage2] = useState("")
let [frontendImage3, setFrontendImage3] = useState("")
let [backendImage1, setBackendImage1] = useState("")
let [backendImage2, setBackendImage2] = useState("")
let [backendImage3, setBackendImage3] = useState("")
let [rent, setRent] = useState("")
let [city, setCity] = useState("")
let [landmark, setLandmark] = useState("")
let [category, setCategory] = useState("")

let {serverUrl} = useContext(authDataContext)


const handleAddListing = async()=>{
    try {
        let formData = new FormData()

        formData.append("title", title)
        formData.append("image1", backendImage1)
        formData.append("image2", backendImage2)
        formData.append("image3", backendImage3)
        formData.append("description", description)
        formData.append("rent", rent)
        formData.append("city", city)
        formData.append("landmark", landmark)
        formData.append("category", category)

        let result = await axios.post( serverUrl + "/api/listing/add", formData, {withCredentials: true} )

        console.log(result);
        

        } catch (error) {
        console.log(error);
        
      }
}

let value={
    title,setTitle,
    description, setDescription,
    frontendImage1, setFrontendImage1,
    frontendImage2, setFrontendImage2,
    frontendImage3, setFrontendImage3,
    backendImage1, setBackendImage1,
    backendImage2, setBackendImage2,
    backendImage3, setBackendImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory
}
  return (
    <div>
      <listingDataContext.Provider value={value} >
        {children}
      </listingDataContext.Provider>
    </div>
  )
}

export default ListingContext
