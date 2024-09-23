import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [count, setCount] = useState(0);
  console.log(props, "this is props");
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
      {count === 0 && <ChildHeader count="0" />}
      {count === 1 && <ChildHeader count="1" />}
      {count === 2 && <ChildHeader count="2" />}
    </header>
  );
};
const ChildHeader = (props) => {
  const [count, setCount] = useState(0);
  console.log(props, "this is props");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < 2 ? prevCount + 1 : 0));
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div
        style={{
          background: `url(../img/landing/landing${props.count}.png) center center no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "90vh",
          width: "100vw",
          maxWidth: "100%",
          overflow: "hidden",
          minWidth: "100%",
        }}
      >
        <div className="intro position-relative">
          <div className="overlay"></div>
          <div className="container h-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text">
                <h2 className="text-start h1-text-intro text-capitalize fs-1 text-white mb-3">
                  {props.data ? props.data.title : "Car Rental Made"}
                </h2>

                <div className="animation-div">
                  <div
                    style={{ letterSpacing: "3px" }}
                    className="text-animate  animated-text text-start h1-text-intro text-capitalize text-white mb-3 h2-text-intro"
                  >
                    {count === 0 && "Affordable"}
                    {count === 1 && "Reliable"}
                    {count === 2 && "Flexible"}
                  </div>
                </div>

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
                <span class="mouse">
            <img src="./img/mouse.png" alt="Scroll icon" />
          </span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
