import React from "react";
import OrderCardComponent from "./order-card.component";

const LiveBookingSection = () => {
  return (
    <>
      <div className="container mt-4  py-4">
        <OrderCardComponent/>
        <OrderCardComponent/>
        <OrderCardComponent/>
      </div>
    </>
  );
};

export default LiveBookingSection;
