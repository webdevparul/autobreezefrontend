import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import Breadcrumb from "../components/common/bredcum.component";
import Footer from "../components/footer";
import ProfileButtonSection from "../components/profile/profile-button-section.component";
import ProfileSectionComponent from "../components/profile/profile-section.component";
import LiveBookingSection from "../components/profile/live-booking-section";
import BookingHistorySection from "../components/profile/booking-history-section.component";

const ProfilePage = () => {
  const [sectionName, setSectionName] = useState("profile");


  useEffect(() => {
    //fetch user Detail
    
  }, [])
  
  const handleChangeSection = (name) => {
    setSectionName(name);
    switch(name){
      case "livebooking":
        break;
      case "bookinghistory":
        break;
      default:
        break;

    }
  };
  return (
    <>
      <Navigation page="detail"></Navigation>
      <Breadcrumb name="profile" />
      <div className="container pb-2">
        <div className="row">
          <ProfileButtonSection handleChangeSection={handleChangeSection} sectionName={sectionName}/>
        </div>
       {sectionName === "profile"&&<ProfileSectionComponent/>}
       {sectionName === "livebooking"&&
       <LiveBookingSection/>
       }
       {sectionName === "bookinghistory"&&<BookingHistorySection/>}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
