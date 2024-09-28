import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";

const ProfileSectionComponent = ({ isEdit = false }) => {
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

  // Formik form handling and Yup validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNumber: "",
      emailId: "",
      nationality: "",
      addressLine1: "",
      addressLine2: "",
      pinCode: "",
      dlNumber: "",
      passportNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      mobileNumber: Yup.string().required("Mobile Number is required"),
      emailId: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      nationality: Yup.string().required("Nationality is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      addressLine2: Yup.string().required("Address Line 2 is required"),
      pinCode: Yup.string().required("Pin Code is required"),
      dlNumber: Yup.string().required("DL Number is required"),
      passportNumber: Yup.string().required("Passport Number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <div className="profile-detail-section mt-5 bg-white py-2 pb-3 mb-3 px-3">
      <form className="profile-form" onSubmit={formik.handleSubmit}>
        <div className="row pt-3 px-3">
          <div className="col-8 col-md-6">
            <h3 className="text-theme pt-2">Personal Details</h3>
          </div>
          <div className="col-4 col-md-6 text-end">
            {isEdit ? (
              <button className="btn btn-outline-dark btn-sm btn-md-lg">
                Edit detail
              </button>
            ) : (
              <button className="btn btn-dark btn-sm btn-md-lg px-4">
                Save
              </button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2 ">
            <div className="rounded-img-div d-flex justify-content-center justify-content-md-start py-4 py-md-0">
              <img src="./img/profile.png" alt="profileimg" />
            </div>
          </div>
          <div className="col-12 col-md-10 px-2 px-md-5">
            <div className="row">
              {/* First Name */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-danger">{formik.errors.firstName}</div>
                ) : null}
              </div>

              {/* Middle Name */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="middleName" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  name="middleName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.middleName}
                />
              </div>

              {/* Last Name */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-danger">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="row">
              {/* Mobile Number */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileNumber"
                  name="mobileNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobileNumber}
                />
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <div className="text-danger">
                    {formik.errors.mobileNumber}
                  </div>
                ) : null}
              </div>

              {/* Email ID */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="emailId" className="form-label">
                  Email Id *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailId}
                />
                {formik.touched.emailId && formik.errors.emailId ? (
                  <div className="text-danger">{formik.errors.emailId}</div>
                ) : null}
              </div>

              {/* Nationality */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="nationality" className="form-label">
                  Nationality *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nationality"
                  name="nationality"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nationality}
                />
                {formik.touched.nationality && formik.errors.nationality ? (
                  <div className="text-danger">{formik.errors.nationality}</div>
                ) : null}
              </div>
            </div>

            <div className="row">
              {/* Address Line 1 */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="addressLine1" className="form-label">
                  Address Line 1 *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  name="addressLine1"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressLine1}
                />
                {formik.touched.addressLine1 && formik.errors.addressLine1 ? (
                  <div className="text-danger">
                    {formik.errors.addressLine1}
                  </div>
                ) : null}
              </div>

              {/* Address Line 2 */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="addressLine2" className="form-label">
                  Address Line 2 *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  name="addressLine2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.addressLine2}
                />
                {formik.touched.addressLine2 && formik.errors.addressLine2 ? (
                  <div className="text-danger">
                    {formik.errors.addressLine2}
                  </div>
                ) : null}
              </div>

              {/* Pin Code */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="pinCode" className="form-label">
                  Pin Code *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  name="pinCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinCode}
                />
                {formik.touched.pinCode && formik.errors.pinCode ? (
                  <div className="text-danger">{formik.errors.pinCode}</div>
                ) : null}
              </div>
            </div>

            <div className="row">
              {/* DL Number */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="dlNumber" className="form-label">
                  DL Number *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dlNumber"
                  name="dlNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dlNumber}
                />
                {formik.touched.dlNumber && formik.errors.dlNumber ? (
                  <div className="text-danger">{formik.errors.dlNumber}</div>
                ) : null}
              </div>

              {/* Passport Number */}
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="passportNumber" className="form-label">
                  Passport Number *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="passportNumber"
                  name="passportNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passportNumber}
                />
                {formik.touched.passportNumber &&
                formik.errors.passportNumber ? (
                  <div className="text-danger">
                    {formik.errors.passportNumber}
                  </div>
                ) : null}
              </div>
              <div className="col-12 col-md-4 mb-3">
                <label htmlFor="pinCode" className="form-label">
                  Pin Code *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  name="pinCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinCode}
                />
                {formik.touched.pinCode && formik.errors.pinCode ? (
                  <div className="text-danger">{formik.errors.pinCode}</div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-3">
                <FileUploader
                  name="file"
                  types={fileTypes}
                  className="w-100"
                  onChange={(file) => formik.setFieldValue("file", file)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSectionComponent;
