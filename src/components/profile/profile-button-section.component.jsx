import React from "react";
import { profileSectionNames } from "../../utility";

const ProfileButtonSection = ({handleChangeSection,sectionName}) => {
  return (
    <div className="col-12">
        {
            profileSectionNames.map((item)=>{
               return <button className={`btn btn${sectionName===item.value?"":"-outline"}-dark me-2 px-5`} onClick={()=>handleChangeSection(item.value)}>{item.name}</button>
            })
        }
      
    </div>
  );
};

export default ProfileButtonSection;