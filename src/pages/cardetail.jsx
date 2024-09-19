import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import Footer from "../components/footer";
import Faq from "../components/faq";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/common/bredcum.component";
import RentalBooking from "../components/carrentalbook";
import KeyFeatures from "../components/cardetails/keyfeature.component";
import useCarApi from "../api/usecarapi.hook";
const CardDetail = ({ faq, data }) => {
  const { slug } = useParams();
  const id = +slug;
  const { fetchCarData } = useCarApi();
  const [carDetail, setcarDetail] = useState(
    data?.find((item) => item?.id === id)
  );
  console.log(carDetail);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // fetchCarDetail();
    setcarDetail(data?.find((item) => item?.id === id))
  }, [slug,data]);

  const [imageName, setimageName] = useState("")
  const [count, setcount] = useState(0)
  const [keyFeatureActiveCount, setkeyFeatureActiveCount] = useState(0)
  const keyFeatures = carDetail?.key_feature?.split("@");
  useEffect(() => {
    let intervalId = setInterval(()=>{
      if(count <2){

        setcount(count+1)
      }
      else{
        setcount(0)
      }
    },2000)

    if(keyFeatureActiveCount<keyFeatures?.length-1){
      setkeyFeatureActiveCount(keyFeatureActiveCount+1)
    }else{
      setkeyFeatureActiveCount(0)
    }


    return(() => {
        clearInterval(intervalId)
    })
  }, [count])
  

  async function fetchCarDetail() {
    try {
      const data = await fetchCarData(1);
      console.log(data);
    } catch (error) {}
  }
  
  return (
    <div>
      <Navigation page="detail"/>
      <Breadcrumb name={carDetail?.title} />
      <div className="section">
        <div className="image w-100">
          <img src={`./img/detailimage${1}.png`} className="w-100" alt="" />
        </div>
      </div>
      <RentalBooking section="detail" name={carDetail?.title} />
      <div className="detail-section">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="text-theme pe-5">{carDetail?.section1_title}</h1>
              <p className="text-secondary"> {carDetail?.section1_desc}</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 ">
              <img
                src={`./img/cardetails/carid${id}/section1_images.png`}
                className="w-100"
                alt=""
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 col-md-6 col-lg-6 px-2  p-md-5">
              <img
                src={`./img/cardetails/carid${id}/section2_images.png`}
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 pt-5">
              <h1 className="text-theme pe-5">{carDetail?.section2_title}</h1>
              <p className="text-secondary"> {carDetail?.section2_desc}</p>
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures
        keyFeatures={keyFeatures}
        id={id}
        count={keyFeatureActiveCount}
        imagepath={`./img/cardetails/carid${id}/key_feature_img.png`}
      />
      <Faq data={faq} />
      <Footer />
    </div>
  );
};

export default CardDetail;
