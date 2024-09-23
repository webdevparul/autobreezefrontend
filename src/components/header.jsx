import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < 2 ? prevCount + 1 : 0));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header id="header">
    <div
      className="intro position-relative"
      style={{
        background: `url(../img/landing/landing${count}.png) center center no-repeat`,
        backgroundSize: "cover",
        height: "80vh", 
        width:'100%',
        

      }}
    >
      <div className="overlay"></div>
      <div className="container h-100 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-8 col-md-offset-0 intro-text">
            <h2 className="text-start h1-text-intro text-capitalize fs-1 text-white mb-3">
              {props.data ? props.data.title : "Loading..."}
            </h2>

            {/* Animated Text */}
            <div className="animation-div">
              <h2 className="h1-text-intro text-animate text-white text-start text-capitalize affo animated-text">
                {count === 0 && "Affordable"}
                {count === 1 && "Reliable"}
                {count === 2 && "Flexible"}
              </h2>
            </div>

            {/* Call to Action Button */}
            <div className="text-start mt-4">
              <a
                href="https://wa.me/971527074847/?text=Your booking done for car rental."
                title="Share on WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="btn btn-custom btn-lg page-scroll btn-style501"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <span className="mouse">
        <img src="./img/mouse.png" alt="Scroll icon" />
      </span>
    </div>
  </header>
  );
};
