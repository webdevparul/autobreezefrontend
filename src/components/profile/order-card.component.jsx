import React from 'react'

const OrderCardComponent = ({orderDetail}) => {
  return (
    <div className="row car-card mb-2 align-items-center bg-white py-4 livecar-section" style={{borderRadius:"4px"}}>
    {/* Car Image Column */}
    <div className="col  car-img text-center mb-4 mb-md-0">
      <img
      style={{width:"211px",height:"108px"}}
        src="./img/car/chevy.png"
        alt="Mazda Cx5"
      />
    </div>
    {/* Car Details Column */}
    <div className="col  car-details">
      <h4>Mazda Cx5</h4>
      <p>
        <span className="label">Booking ID:</span> 3657316614
      </p>
      <p>
        <span className="label">Duration:</span> 25 Aug to 25 Oct
      </p>
     
    </div>
    <div className="col">
    <p>
        <span className="label">Delivery:</span> Pickup
      </p>
      <p>
        <span className="label">Address:</span> 123/245 Yas Island
      </p>
    </div>

    {/* Pickup & Drop Time and Button Column */}
    <div className="col px-3">
      <p>
        <span className="label">Pickup Time:</span> 12:25 PM
      </p>
      <p>
        <span className="label">Drop Time:</span> 1:25 PM
      </p>
     
    </div>
    <div className="col-12 col-md-1 text-end invoice-btn-div w-100">
    {/* <div className="invoice-button"> */}
        <button className="btn btn-outline-dark btn-sm w-100">View Invoice</button>
      {/* </div> */}
    </div>
  </div>
  )
}

export default OrderCardComponent
