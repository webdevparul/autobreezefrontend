import React, { useState } from "react";

const CarCardComponent = ({ carDetail, idindex,handleClickBook ,bg=""}) => {
  let height = idindex === 0 || idindex === 2 ? 280.25 : 330.25;
  height = idindex === 3 ? 290.25 : height;
  height=280.25
  const [price, setprice] = useState(127);
  const [period, setperiod] = useState("");
  const handleClickBookPeriod = (price, period) => {
    setprice(price);
    setperiod(period);
  };
  return (
    <div className="col-12 col-md-6 col-lg-6 car-fleet">
      <div className="card w-100 bg-theme-dark border-0 ">
        <div className={`w-100 px-1 car-img-div position-relative ${bg}`}>

        <img
          src={`./img/car/${carDetail.img}`}
          // height={height}
          className="card-img-top cursor-pointer image-car img-fluid"
          onClick={()=>handleClickBook(carDetail?.id)}
          alt="..."
          />
          </div>
        <div className={`card-body ${bg}`}>
          <h5
            className={`card-title text-theme fs-3 fw-semibold pb-2 text-capitalize ${
              1 === 0 ? "mt-52" : 1 === 2 ? "mt-12" : ""
            }`}
          >
            {carDetail.title}
          </h5>
          <div className="w-100 mt-2 mb-2  d-inline-block d-flex ">
            <div className={`price-card me-2 ${period === 'Daily'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[0].price,"Daily")}>
              <h6>Daily</h6>
              <h6 className="fw-semibold text-theme " >{carDetail.bookTime[0].price}</h6>
            </div>
            <div className={`price-card me-2 ${period === 'Week'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[1].price,"Week")}>
              <h6>Weekly</h6>
              <h6 className="fw-semibold text-theme ">{carDetail.bookTime[1].price}</h6>
            </div>

            <div className={`price-card me-2 ${period === 'Month'?"act":""}`} onClick={()=>handleClickBookPeriod(carDetail.bookTime[2].price,"Month")}>
              <h6>Monthly</h6>
              <h6 className="fw-semibold text-theme ">{carDetail.bookTime[2].price}</h6>
            </div>
          </div>
          <buton className="btn-style501 btn bg-dark-blue w-100 border-0 text-white mb-2 py-3 fs-6 mt-3 btn-book-price cursor-pointer" onClick={()=>handleClickBook(carDetail?.id)}>
          {period === ""?"Book":`Book for ${price}${" "}/${" "}${period}`}  
          </buton>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
      </div>
    </div>
  );
};

export default CarCardComponent;
