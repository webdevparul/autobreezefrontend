import React, { useEffect, useState } from "react";
import CarCardComponent from "./car-card.component";
import { useNavigate } from "react-router-dom";

const OurFleet = ({ data }) => {
  console.log(data)
  const [Category, setCategory] = useState("luxury");
  const intialData=data?.filter(item=>item.category===Category)
  const [carData, setcarData] = useState(intialData);
  const [isDiplayMore, setisDiplayMore] = useState(false)

  

  useEffect(() => {
    if(Category !== "all"){
      setcarData(data?.filter(item=>item.category===Category))
    }else{
      setcarData(data)
    }
    
  }, [Category,data])
  
  const navigate = useNavigate();
  const handleChnage = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleClickBook = (id) => {
    if(id){
      navigate(`/${id}`);
    }
  };

  return (
    <div className="bg-theme-dark fleet-btn" id="explorecar">
      <div className="container">
        <h1 className="text-center py-5 text-theme fw-semibold">Our Fleet</h1>
        <div className="brand-type d-flex justify-content-center pb-3">
          <div
            className="btn-group d-block fleet"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              value={"all"}
              onChange={handleChnage}
              autoComplete="off"
              //   defaultChecked
            />
            <label
              className={`text-theme btn btn-outline-secondary rounded-0  ${
                Category === "all" ? "active" : ""
              }`}
              htmlFor="btnradio1"
            >
              All
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value={"suv"}
              onChange={handleChnage}
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className={`text-theme btn btn-outline-secondary  ${
                Category === "suv" ? "active" : ""
              }`}
              htmlFor="btnradio2"
            >
              SUV
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              value={"luxury"}
              onChange={handleChnage}
              autoComplete="off"
            />
            <label
              className={`text-theme btn btn-outline-secondary ${
                Category === "luxury" ? "active" : ""
              }`}
              htmlFor="btnradio3"
            >
              Luxury
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value={"sedan"}
              onChange={handleChnage}
              id="btnradio4"
              autoComplete="off"
            />
            <label
              className={`text-theme btn btn-outline-secondary mt-md-0  ${
                Category === "sedan" ? "active" : ""
              }`}
              htmlFor="btnradio4"
            >
              Sedan
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value={"all"}
              onChange={handleChnage}
              id="btnradio7"
              autoComplete="off"
            />
            {/* <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio7"
              autoComplete="off"
            /> */}
            {/* <label
              className={`text-theme btn btn-outline-secondary mt-4 mt-md-0  ${
                Category === "compact" ? "active" : ""
              }`}
              htmlFor="btnradio8"
            >
              Compact
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              value={"compact"}
              onChange={handleChnage}
              id="btnradio8"
              autoComplete="off"
            /> */}
          </div>
        </div>
        <div className="row mt-5">
          {/* <CarCardComponent/> */}
          {carData&&carData?.map((car, index) => {
            const count=isDiplayMore?carData.length:4;
            if((index<count)){

              return <CarCardComponent carDetail={car} idindex={index} handleClickBook={handleClickBook}/>
            }
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button className="btn btn-outline-dark fw-lighter fs-3 view-all-btn" onClick={()=>setisDiplayMore(!isDiplayMore)}>
              {!isDiplayMore?"View all":"Hide More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFleet;
