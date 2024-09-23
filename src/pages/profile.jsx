import React, { useState } from "react";
import { Navigation } from "../components/navigation";
import Breadcrumb from "../components/common/bredcum.component";
import Footer from "../components/footer";
import ProfileButtonSection from "../components/profile/profile-button-section.component";
import ProfileSectionComponent from "../components/profile/profile-section.component";

const ProfilePage = () => {
  const [sectionName, setSectionName] = useState("profile");
  const handleChangeSection = (name) => {
    setSectionName(name);
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
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
