import React, { useMemo, useState } from "react";
import { calculateCounts } from "../utility";

const RentalBooking = ({ section, name, data }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [insurance, setInsurance] = useState("");
  const [timePeriod, settimePeriod] = useState("months");
  const [timeCount, settimeCount] = useState(0);
  const cars = data;

  const getPeriodName=useMemo(()=>{
      if(timePeriod === "daily"){
        return timeCount >1?"Days":"day"
      }
      if(timePeriod === "months"){
        return timeCount >1?"Months":"Month"
      }
      if(timePeriod === "weekly"){
        return timeCount >1?"Weeks":"Week"
      }
  },[timePeriod,timeCount])

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Car: ${selectedCar}, Pickup: ${pickupDate} ${pickupTime}, Drop-off: ${dropOffDate} ${dropOffTime}, Insurance: ${insurance}`
    );
  };

  const handleTimePeriod = (time) => {
    settimePeriod(time);
    calculateTime(pickupDate, dropOffDate, time);
  };
  function calculateTime(startDate, endDate, timeperiod) {
    if (startDate !== "" && endDate !== "") {
      const count = calculateCounts(startDate, endDate);
      settimeCount(count[timeperiod]);
    } else {
      settimeCount(0);
    }
  }
  const handleDropOffDate = (e) => {
    const { value } = e.target;
    setDropOffDate(value);
    calculateTime(pickupDate, value, timePeriod);
  };

  return (
    <div className="bg-dark-blue rental-book-section pb-4">
      {section !== "detail" && (
        <h1 className="text-center py-2  text-white  pt-5">Book Now</h1>
      )}
      <div className="container pt-3">
        {name && (
          <h1 className="text-start ps- py-2 fw-semibold text-white  pt-3">
            {name}
          </h1>
        )}
        <div className="brand-btn ">
          {/* <div
            className="btn-group pb-4"
            role="group"
            aria-label="Basic outlined example"
          > */}
          <button
            type="button"
            className={`rounded me-3  btn   text-dark ${
              timePeriod === "daily"
                ? "btn-light"
                : "btn-outline-default text-white"
            }`}
            onClick={() => handleTimePeriod("daily")}
          >
            Daily
          </button>
          <button
            type="button"
            className={`rounded me-3 btn   text-dark ${
              timePeriod === "weekly"
                ? "btn-light"
                : "btn-outline-default text-white"
            }`}
            onClick={() => handleTimePeriod("weekly")}
          >
            Weekly
          </button>
          <button
            type="button"
            className={`rounded  btn   text-dark ${
              timePeriod === "months"
                ? "btn-light"
                : "btn-outline-default text-white"
            }`}
            onClick={() => handleTimePeriod("months")}
          >
            Monthly
          </button>
          {/* </div> */}
          <form onSubmit={handleSubmit} className="mb-0 mt-5">
            <div className="row mt-2 book-input ">
              <div className="col-12 col-md-3">
                {/* <label>Pickup Date: */}
                <label htmlFor="">From</label>
                <input
                  type="date"
                  className="form-control bg-dark text-theme"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                {/* </label> */}
              </div>
              <div className="col-12 col-md-3 mt-2 m-md-0">
                <label htmlFor="">To</label>
                <input
                  type="date"
                  className="form-control bg-dark text-theme"
                  value={dropOffDate}
                  onChange={(e) => handleDropOffDate(e)}
                />
              </div>
              <div className="col-12 col-md-3 mt-2 mt-md-0">
                <label htmlFor="">Pickup Time</label>
                <input
                  type="time"
                  className="form-control bg-dark text-theme"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-3 mt-2 mt-md-0">
                <label htmlFor="">Drop off Time</label>
                <input
                  type="time"
                  className="form-control bg-dark text-theme"
                  value={dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2 pb-2 book-input">
              <div className="col-12 col-md-3">
                <label htmlFor="">Select Car</label>
                <select
                  className="form-select bg-dark text-theme"
                  aria-label="Default select example"
                  value={selectedCar}
                  onChange={(e) => setSelectedCar(e.target.value)}
                >
                  <option value="">--Select a Car--</option>
                  {cars?.map((car) => (
                    <option key={car.title} value={car.title}>
                      {car.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6 mt-2 mt-md-0 d-none  d-md-block">
                <div className="input-group delivery-group">
                  <label
                    htmlFor=""
                    style={{ left: "12px !important" }}
                    className="label-p"
                    id="deliverylabel"
                  >
                    Delivery
                  </label>
                  <select
                    className="form-select bg-dark text-theme "
                    aria-label="Default select example"
                    id="preselection"
                    // value={selectedCar}
                    // onChange={(e) => setSelectedCar(e.target.value)}
                  >
                    <option value="">Delivery</option>
                  </select>
                  {/* <hr /> */}
                  <label
                    htmlFor=""
                    className="adress-label mt-2 mt-md-0"
                    style={{ left: "12px !important" }}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-theme address-input"
                    // placeholder="address"
                    aria-label="Text input with dropdown button"
                  />
                </div>
              </div>
              <div className="d-block d-md-none d-lg-none">
                <div className="col-6 mt-2 w-100">
                  <label
                    htmlFor=""
                    // style={{ left: "12px !important" }}
                    id="deliverylabel"
                  >
                    Delivery
                  </label>
                  <select
                    className="form-select bg-dark text-theme mt-2 "
                    aria-label="Default select example"
                    id="preselection"
                    style={{width:"100%"}}
                    // value={selectedCar}
                    // onChange={(e) => setSelectedCar(e.target.value)}
                  >
                    <option value="">Delivery</option>
                  </select>
                </div>
                <div className="col-6 w-100 mt-2">
                  <label
                    htmlFor=""
                    className="adress-label mt-2 mt-md-0 lable-p"
                    style={{ left: "12px !important" }}
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-theme address-input"
                    // placeholder="address"
                    aria-label="Text input with dropdown button"
                  />
                </div>
              </div>
              {/* <div className="col-12 col-md-3 mt-2 mt-md-0">
                <label htmlFor="">Select Insurance</label>
                <select
                  value={insurance}
                  className="form-select bg-dark text-theme"
                  onChange={(e) => setInsurance(e.target.value)}
                >
                  <option value="">--Select Insurance--</option>
                  <option value="Collision Damage">Collision Damage</option>
                  <option value="Unlimited Miles">
                    Unlimited Miles (12 AED/ Month)
                  </option>
                </select>
              </div> */}
            </div>
            {/* <div className="row checkbox-input mt-2 pb-2">
              <div className="col-12">
                <div>
                  <div className="form-check form-check-inline text-theme">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      defaultValue="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Unlimited Miles (12 AED/ Month)
                    </label>
                  </div>
                  <div className="form-check form-check-inline text-theme">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      Unlimited Miles (12 AED/ Month)
                    </label>
                  </div>
                  <div className="form-check form-check-inline text-theme">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      defaultValue="option3"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="inlineCheckbox3"
                    >
                      Unlimited Miles (12 AED/ Month)
                    </label>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row pb-5">
              <div className="col-12 d-flex justify-content-end position-relative">
                <span className="me-5 text-white position-absolute month-span">
                  <span className="text-capitalize font-Raleway">
                    {timeCount} {getPeriodName}
                  </span>
                </span>

                <button
                  className="btn btn-light book-btn py-2 px-4 border-0 mt-3 ms-2"
                  type="submit"
                  aria-label="Book Now"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentalBooking;
