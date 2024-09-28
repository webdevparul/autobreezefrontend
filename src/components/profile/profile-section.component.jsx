import React from "react";
import { FileUploader } from "react-drag-drop-files";

const ProfileSectionComponent = ({isEdit=false}) => {
  const fileTypes = ["JPG", "PNG", "GIF","PDF"];

  return (
    <div className="profile-detail-section mt-5 bg-white py-2  pb-3 mb-3 px-3">
      <div className="row pt-3 px-3">
        <div className="col-8 col-md-6">
          <h3 className="text-theme pt-2">Personal Details</h3>
        </div>
        <div className="col-4 col-md-6 text-end">
          {
            isEdit?
            <button className="btn btn-outline-dark btn-sm btn-md-lg" >Edit detail</button>:
            <button className="btn btn-dark btn-sm btn-md-lg" >Save</button>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-2 ">
          <div className="rounded-img-div d-flex justify-content-center justify-content-md-start py-4 py-md-0">
            <img src="./img/profile.png" alt="profileimg" />
          </div>
        </div>
        <div className="col-12 col-md-10 px-2 px-md-5">
          <form className="profile-form">
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Mobile Number*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Email Id*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Natioanlity*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Address Line 1*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Address Line 2*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Pin Code*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  DL Number*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Passport Number*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Pin Code*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="emailId"
                  //placeholder="abc@gmail.com"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-3">
              <FileUploader name="file" types={fileTypes}  className="w-100"/>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSectionComponent;
