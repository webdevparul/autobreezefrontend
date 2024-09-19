import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
export const Header = (props) => {
  const [imageName, setimageName] = useState("")
  const [count, setcount] = useState(0)
  useEffect(() => {
    let intervalId = setInterval(()=>{
      if(count <2){

        setcount(count+1)
      }
      else{
        setcount(0)
      }
    },2000)
    return(() => {
        clearInterval(intervalId)
    })
  }, [count])

  return (
    <header id="header">
      <div className="intro position-relative" style={{background:`url(../img/landing/landing${count}.png) center center no-repeat`}}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text ">
                <h2 className="text-start h1-text-intro text-capitalize text-secondary fs-1 text-white">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <div className="animation-div">

                <h2 className="h1-text-intro text-animate text-white text-start text-capitalize affo ">{count === 0 &&"Affordable"}{count === 1&&"Reliable"}{count ===2 && "Flexible"}</h2>
                </div>
               <div className="text-start">
                <a
                  // href="whatsapp://send?text=Your booking done for car rentel" 
                  href="https://wa.me/971527074847/?text=Your booking done for car rental."
                  title="Share on whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-custom btn-lg page-scroll btn-style501"
                  >
                  {/* Learn More */}
                  Book Now
                </a>{" "}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <span className="mouse"><img src="./img/mouse.png" alt="x"></img></span>
      </div>
    </header>
  );
};
