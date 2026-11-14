import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import Card from "../components/Card";

function MyListing() {
  let navigate = useNavigate();
  let { userData } = useContext(UserDataContext);
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-start flex-col gap-[50px] relative">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" />
      </div>

      <div className="w-[50%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px]">
        MY LISTING
      </div>

        <div className='w-[100vw] flex items-center justify-center gap-[25px] flex-wrap mt-[250px] md:mt-[180px]'>
    {userData.listing.map((list) => (
      <Card title={list.title}
        landmark={list.landmark}
        city={list.city}
        image1={list.image1}
        image2={list.image2}
        image3={list.image3}
        rent={list.rent}
        id={list._id} />
    ))}
  </div>

    </div>
  );
}

export default MyListing;
