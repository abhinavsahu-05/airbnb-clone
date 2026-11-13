import React, { useState } from "react";
import logo from "../assets/Airbnb-Logo.png";
import { useNavigate } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserContext";
import { listingDataContext } from "../context/ListingContext";

function Nav() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  let { serverUrl } = useContext(authDataContext);
  let [cate, setCate] = useState()
  let {listingData, setListingData} = useContext(listingDataContext)
  let { userData, setUserData } = useContext(UserDataContext);

  const handleLogout = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/logout",
        {},
        { withCredentials: true },
      );
      setUserData(null);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

const handleCategory=(category)=>{
    setCate(category)
    listingData.filter((list)=>list.category==category)
}

  return (
    <div className="sticky top-0 z-50 bg-white" >
      <div className="w-full min-h-22.5 border-b  px-[20px] flex items-center justify-between md:px-[40px] ">
        
         <div> <img src={logo} alt="" className="h-[85px]  " />
        </div>
        <div className="w-[35%] flex relative hidden md:block  ">
          <input
            className=" w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px] "
            type="text"
            placeholder="Any Where | Any Location | Any City"
          />
          <button className="absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px] ">
            <IoIosSearch className=" w-[20px] h-[20px] text-white " />
          </button>
        </div>

        {/* Code for popup */}
        <div className="flex items-center justify-center gap-[10px] relative ">
          <span
            className="text-[18px] cursor-pointer rounded-[50px] hover:bg-[ded9d9] px-[8px] py-[5px] md:block hidden hover:bg-gray-200 "
            onClick={() => navigate("/listingpage1")}
          >
            List your home
          </span>
          <button
            className=" px-[20px] py-[10px] flex items-center justify-center gap-[5px] border border-[#8d8dc8c] rounded-[50px] hover:shadow-lg cursor-pointer"
            onClick={() => setShowPopup((prev) => !prev)}
          >
            <span>
              <GiHamburgerMenu className=" w-[20px] h-[20px] " />
            </span>
            {userData == null && (
              <span>
                <CgProfile className=" w-[23px] h-[23px] " />
              </span>
            )}
            {userData != null && (
              <span className=" w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center ">
                {" "}
                {userData?.fullName.slice(0, 1)}{" "}
              </span>
            )}
          </button>
          {showPopup && (
            <div className=" w-[220px] h-[250px] absolute bg-slate-50 top-[110%] right-[10%] border border-[#aaa9a9] z-10 rounded-lg ">
              <ul className=" w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px] ">
                {!userData && (
                  <li
                    className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "
                    onClick={() => navigate("login")}
                  >
                    Login
                  </li>
                )}
                {userData && (
                  <li
                    className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "
                    onClick={() => {
                      handleLogout();
                      setShowPopup(true);
                    }}
                  >
                    Logout
                  </li>
                )}
                <div className=" w-[100%] h-[1px] bg-[#c1c0c0] "></div>
                <li
                  className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "
                  onClick={() => {
                    navigate("/listingpage1");
                    setShowPopup(true);
                  }}
                >
                  List Your Home
                </li>
                <li
                  className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "
                  onClick={() => setShowPopup(true)}
                >
                  My Listing
                </li>
                <li
                  className=" w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer "
                  onClick={() => setShowPopup(true)}
                >
                  Check Booking
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Code for popup ends here */}
      </div>

      <div className=" w-[100%] h-[60px] flex items-center justify-center block md:hidden  ">
        <div className="w-[80%] flex relative   ">
          <input
            className=" w-[100%] px-[17px] overflow-auto py-[10px] border-[2px] border-[#bdbaba] outline-none  rounded-[30px] text-[16px] font-semibold  "
            type="text"
            placeholder="Any Where | Any Location | Any City"
          />
          <button className="absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px] ">
            <IoIosSearch className=" w-[20px] h-[20px] text-white " />
          </button>
        </div>
      </div>

      {/* Code for all 9 components */}
      <div className=" w-full h-[85px] bg-white flex items-center justify-start md:justify-center px-6 overflow-auto cursor-pointer gap-[40px] ">
        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <MdWhatshot className=" w-[30px] h-[30px] text-black " />
          <h3>Trending</h3>
        </div>

        <div className={`flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ${cate=="villa" ? "border-b-[1px] border-[#a6a5a5]" : "" } `}>
          <GiFamilyHouse className=" w-[30px] h-[30px] text-black " />
          <h3>Villa</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap ">
          <MdBedroomParent className=" w-[30px] h-[30px] text-black " />
          <h3>Farm House</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap ">
          <MdOutlinePool className=" w-[30px] h-[30px] text-black " />
          <h3>Pool House</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <GiWoodCabin className=" w-[30px] h-[30px] text-black " />
          <h3>Rooms</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <SiHomeassistantcommunitystore className=" w-[30px] h-[30px] text-black " />
          <h3>Flat</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <IoBedOutline className=" w-[30px] h-[30px] text-black " />
          <h3>PG</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaTreeCity className=" w-[30px] h-[30px] text-black " />
          <h3>Cabins</h3>
        </div>

        <div className=" flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <BiBuildingHouse className=" w-[30px] h-[30px] text-black " />
          <h3>Shops</h3>
        </div>
        {/* Code for 9 components ends here */}
      </div>
    </div>
  );
}

export default Nav;
