import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ListingContext, { listingDataContext } from "../context/ListingContext";
import { UserDataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { FaStar } from "react-icons/fa";
import { bookingDataContext } from "../context/BookingContext";
import { toast } from "react-toastify";

function ViewCard() {
  let navigate = useNavigate();
  let { cardDetails } = useContext(listingDataContext);
  let { userData } = useContext(UserDataContext);
  let [updatePopUp, setUpdatePopUp] = useState(false);
  let [bookingPopUp, setBookingPopUp] = useState(false);
  let [title, setTitle] = useState(cardDetails.title);
  let [description, setDescription] = useState(cardDetails.description);
  let [backendImage1, setBackendImage1] = useState(null);
  let [backendImage2, setBackendImage2] = useState(null);
  let [backendImage3, setBackendImage3] = useState(null);
  let [rent, setRent] = useState(cardDetails.rent);
  let [city, setCity] = useState(cardDetails.city);
  let [landmark, setLandmark] = useState(cardDetails.landmark);
  let { serverUrl } = useContext(authDataContext);
  let { updating, setUpdating } = useContext(listingDataContext);
  let { deleting, setDeleting } = useContext(listingDataContext);
  let [minDate, setMinDate] = useState("");
  let {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    total,
    setTotal,
    night,
    setNight,
    tax,
    setTax,
    handleBooking,
    booking,
  } = useContext(bookingDataContext);

  useEffect(() => {
    if (checkIn && checkOut) {
      let inDate = new Date(checkIn);
      let outDate = new Date(checkOut);
      // Date subtraction se milliseconds milte hain, aur 1 day ke milliseconds se divide karne par total days mil jaate hain.
      let n = (outDate - inDate) / (24 * 60 * 60 * 1000);
      if (n > 0) {
        let airbnbCharge = cardDetails.rent * (7 / 100);
        let taxAmount = cardDetails.rent * (7 / 100);
        setNight(n);
        setTotal(cardDetails.rent * n + airbnbCharge + taxAmount);
      } else {
        setTax(0);
        setTotal(0);
      }
    }
  }, [checkIn, checkOut]);

  const handleUpdateListing = async () => {
    setUpdating(true);
    try {
      let formData = new FormData();

      formData.append("title", title);
      formData.append("image1", backendImage1);
      formData.append("image2", backendImage2);
      formData.append("image3", backendImage3);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landmark", landmark);

      let result = await axios.post(
        serverUrl + `/api/listing/update/${cardDetails._id}`,
        formData,
        { withCredentials: true },
      );

      setUpdating(false);
      console.log(result);
      navigate("/");
      toast.success("Listing Updated Successfully");
      setTitle("");
      setDescription("");
      setBackendImage1(null);
      setBackendImage2(null);
      setBackendImage3(null);
      setRent("");
      setCity("");
      setLandmark("");
    } catch (error) {
      setUpdating(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteListing = async () => {
    setDeleting(true);
    try {
      let result = await axios.delete(
        serverUrl + `/api/listing/delete/${cardDetails._id}`,
        { withCredentials: true },
      );
      console.log(result.data);
      navigate("/");
      toast.success("Listing Deleted Successfully");
      setDeleting(false);

    } catch (error) {
      setDeleting(false);
      console.log(error);
      toast.error(error.response.data.message);

    }
  };

  const handleImage1 = (e) => {
    let file = e.target.files[0];
    setBackendImage1(file);
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];
    setBackendImage2(file);
  };

  const handleImage3 = (e) => {
    let file = e.target.files[0];
    setBackendImage3(file);
  };

  useEffect(() => {
    let today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-start gap-[10px] flex-col overflow-auto relative py-6">
      <div
        className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-full flex items-center justify-center"
        onClick={() => navigate("/listingpage2")}
      >
        <FaArrowLeft className="w-[25px] h-[25px] text-white" />
      </div>

      <div className="w-[95%] md:w-[90%] flex items-start justify-start text-[25px] mb-[10px]">
        <h1 className="text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden px-[70px] md:px-0">
          {`In ${cardDetails.landmark.toUpperCase()}, ${cardDetails.city.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-[95%] md:w-[90%] h-[600px] flex items-center justify-center flex-col md:flex-row mt-4 mb-4">
        <div className="w-full h-[60%] md:w-[65%] md:h-full overflow-hidden flex items-center justify-center border-[2px]">
          <img
            src={cardDetails.image1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[40%] flex items-center justify-center flex-row md:w-[35%] md:h-full md:flex-col">
          <div className="w-[50%] h-full md:w-full md:h-[50%] overflow-hidden flex items-center justify-center border-[2px]">
            <img
              src={cardDetails.image2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[50%] h-full md:w-full md:h-[50%] overflow-hidden flex items-center justify-center border-[2px]">
            <img
              src={cardDetails.image3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-[90%] flex items-start justify-start text-[18px] md:text-[25px]">
        {cardDetails.title.toUpperCase()}
      </div>

      <div className="w-[95%] md:w-[90%] flex items-start justify-start text-[18px] md:text-[25px] text-gray-800">
        {cardDetails.description}
      </div>

      <div className="w-[95%] md:w-[90%] flex items-start justify-start text-[18px] md:text-[25px] text-gray-800"></div>

      <div className="w-[95%] md:w-[90%] flex items-start justify-start text-[18px] md:text-[25px]">
        {`Rs.${cardDetails.rent}/day`}
      </div>

      <div className="w-[95%] md:w-[90%] h-[50px] flex items-center justify-start mt-3 mb-5">
        {cardDetails.host == userData._id && (
          <button
            className="px-[30px] ml-40 py-[10px] text-white bg-[red] text-[18px] md:px-[100px] rounded-lg transition-transform duration-300 active:scale-95 text-nowrap"
            onClick={() => setUpdatePopUp((prev) => !prev)}
          >
            Edit listing
          </button>
        )}

        {cardDetails.host != userData._id && (
          <button
            className="px-[110px] py-[10px] bg-[red] text-white ml-16 text-[18px] md:px-[100px] rounded-lg transition-transform duration-300 active:scale-95"
            onClick={() => setBookingPopUp((prev) => !prev)}
          >
            Reserve
          </button>
        )}
      </div>

      {updatePopUp && (
        <div className="w-full min-h-screen fixed inset-0 z-[100] bg-[#000000a9] backdrop-blur-sm flex items-center justify-center px-3 pt-20 pb-4 sm:px-5 sm:pt-24">
          {/* Cross */}
          <RxCross2
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-[red] text-white cursor-pointer rounded-full p-1 fixed top-4 left-3 sm:top-6 sm:left-6 md:top-[5%] md:left-[30px]"
            onClick={() => setUpdatePopUp(false)}
          />

          {/* Title */}
          <div className="text-[14px] sm:text-[18px] md:text-[20px] bg-[#f14242] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 rounded-[30px] shadow-lg fixed top-4 right-3 sm:top-6 sm:right-6 md:top-[5%] md:right-[25px]">
            Update your details
          </div>

          {/* Update Form */}
          <form className="w-full max-w-2xl max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-white p-5 sm:p-8 flex flex-col gap-5 [scrollbar-width:none]">
            <h1 className="w-full flex items-center justify-center text-xl sm:text-[25px] border-b border-[#a3a3a3] py-3">
              Update Listing
            </h1>

            {/* Title */}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-2 border-[#555656] rounded-[10px] px-3 py-2"
            />

            {/* Description */}
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border-2 border-[#555656] rounded-[10px] px-3 py-2 min-h-[100px]"
            />

            {/* Image 1 */}
            <div className="w-full">
              <label className="text-sm font-semibold">Image 1</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage1}
                className="w-full border-2 border-[#555656] rounded-[10px] px-2 py-2 mt-1"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full">
              <label className="text-sm font-semibold">Image 2</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage2}
                className="w-full border-2 border-[#555656] rounded-[10px] px-2 py-2 mt-1"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full">
              <label className="text-sm font-semibold">Image 3</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage3}
                className="w-full border-2 border-[#555656] rounded-[10px] px-2 py-2 mt-1"
              />
            </div>

            {/* Rent */}
            <input
              type="number"
              placeholder="Rent"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="w-full border-2 border-[#555656] rounded-[10px] px-3 py-2"
            />

            {/* City */}
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-2 border-[#555656] rounded-[10px] px-3 py-2"
            />

            {/* Landmark */}
            <input
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full border-2 border-[#555656] rounded-[10px] px-3 py-2"
            />

            {/* Update Button */}
            <button
              type="submit"
              disabled={updating}
              className="w-full sm:w-[85%] font-bold bg-[red] py-3 px-6 text-center rounded-lg text-base sm:text-lg text-white transition-transform active:scale-95 duration-300"
            >
              {updating ? "Updating..." : "Update Listing"}
            </button>
          </form>
        </div>
      )}

      {bookingPopUp && (
        <div className="w-full min-h-screen fixed inset-0 z-[100] bg-[#ffffff8e] backdrop-blur-sm flex items-center justify-center px-3 pt-20 pb-4 sm:px-5 sm:pt-24 backdrop-blur-sm md:flex-row md:gap-[100px] ">
          <RxCross2
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] bg-[red] text-white cursor-pointer rounded-full p-1 fixed top-4 left-3 sm:top-6 sm:left-6 md:top-[7%] md:left-[30px] absolute"
            onClick={() => setBookingPopUp(false)}
          />

          <div></div>

          <form
            className="w-[90%] max-w-[450px] min-h-[450px] max-h-[90vh] overflow-y-auto bg-[#f7fbfcfe] p-4 sm:p-5 rounded-lg flex items-center flex-col gap-2 border border-[#dedddd]"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="w-full flex items-center justify-center text-xl sm:text-[25px] border-b border-[#a3a3a3] py-3">
              Confirm & Book
            </h1>

            <div className="w-full flex-1 mt-2 rounded-lg p-2 sm:p-[10px]">
              <h3 className="text-lg sm:text-[19px] font-semibold">
                Your Trip -
              </h3>

              <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-5">
                <label htmlFor="checkIn" className="text-base sm:text-lg">
                  CheckIn
                </label>

                <input
                  type="date"
                  min={minDate}
                  id="checkIn"
                  className="border-[#555656] border-2 w-full sm:w-[200px] max-w-full h-10 rounded-[10px] bg-transparent px-2 text-sm sm:text-base"
                  required
                  onChange={(e) => setCheckIn(e.target.value)}
                  value={checkIn}
                />
              </div>

              <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-6">
                <label htmlFor="checkOut" className="text-base sm:text-lg">
                  Checkout
                </label>

                <input
                  type="date"
                  min={minDate}
                  id="checkOut"
                  className="border-[#555656] border-2 w-full sm:w-[200px] max-w-full h-10 rounded-[10px] bg-transparent px-2 text-sm sm:text-base"
                  required
                  onChange={(e) => setCheckOut(e.target.value)}
                  value={checkOut}
                />
              </div>

              <div className="w-full flex items-center justify-center mt-6">
                <button
                  className="w-full sm:w-fit font-bold bg-[red] py-2 px-6 sm:px-12 md:px-16 text-center rounded-lg text-base sm:text-lg transition-transform active:scale-95 duration-300"
                  onClick={() => handleBooking(cardDetails._id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>

          <div className="max-w-[450px] w-[90%] h-[450px] overflow-auto bg-[#f7fbfcfe] p-[20px] rounded-lg flex items-center justify-center flex-col gap-[10px] border-[1px] border-[#dedddd]">
            <div className="w-[95%] min-h-[30%] border-[1px] border-[#dedddd] rounded-lg flex items-center gap-[15px] sm:gap-[25px] p-[12px] sm:p-[20px] overflow-hidden">
              <div className="w-[70px] h-[80px] sm:w-[90px] sm:h-[90px] flex items-center justify-center flex-shrink-0 rounded-lg">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={cardDetails.image1}
                  alt=""
                />
              </div>

              <div className="flex-1 min-w-0 h-auto">
                <h1 className="w-full truncate text-[13px] sm:text-[15px]">
                  {`IN ${cardDetails.landmark.toUpperCase()},${cardDetails.city.toUpperCase()}`}
                </h1>

                <h1 className="truncate text-[13px] sm:text-[15px]">
                  {cardDetails.title.toUpperCase()}
                </h1>

                <h1 className="truncate text-[13px] sm:text-[15px]">
                  {cardDetails.category.toUpperCase()}
                </h1>
                <h1 className="flex items-center justify-start gap-[5px] flex-shrink-0 text-[13px] sm:text-[15px]">
                  <FaStar className="text-[#eb6262]" />
                  {cardDetails.ratings}
                </h1>
              </div>
            </div>

            <div className="w-[95%] min-h-[60%] h-auto border border-[#abaaaa] rounded-lg flex justify-start items-start p-3 sm:p-4 md:p-5 gap-3 flex-col">
              <h1 className="text-xl sm:text-[22px] font-semibold">
                Booking Price -
              </h1>

              <p className="w-full flex justify-between items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold min-w-0">
                  {`₹${cardDetails.rent} X ${night} nights`}
                </span>
                <span className="shrink-0">₹{cardDetails.rent * night}</span>
              </p>

              <p className="w-full flex justify-between items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold">Tax</span>
                <span className="shrink-0">
                  ₹{night != 0 ? (cardDetails.rent * 7) / 100 : 0}
                </span>
              </p>

              <p className="w-full flex justify-between items-center gap-2 text-sm sm:text-base border-b border-gray-500 pb-3">
                <span className="font-semibold">Airbnb Charge</span>
                <span className="shrink-0">
                  ₹{night != 0 ? (cardDetails.rent * 7) / 100 : 0}
                </span>
              </p>

              <p className="w-full flex justify-between items-center gap-2 text-sm sm:text-base">
                <span className="font-semibold">Total price</span>
                <span className="font-bold shrink-0">₹{total}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCard;
