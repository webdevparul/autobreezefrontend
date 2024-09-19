import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import Breadcrumb from "../components/common/bredcum.component";
import Footer from "../components/footer";
import CarCardComponent from "../components/fleet/car-card.component";
import { capacity, categories } from "../utility";
import CheckBoxComponent from "../components/common/checkbox.component";
import ModalComponent from "../components/common/modal.component";

const ExploreCars = ({ data }) => {
  const [carData, setcarData] = useState(data);
  useEffect(() => {
    setcarData(data);
  }, [data]);
  const [filterData, setfilterData] = useState({
    categories: [],
    capacities: [],
    searchText: "",
  });

  const handleChangeCheckbox = (e) => {
    debugger
    const { value, name, checked } = e.target;
    console.log(filterData[name]);
    if (filterData[name].includes(value)) {
      const data=filterData[name]?.filter((item) => item !== value)
      setfilterData((pre) => ({
        ...pre,
        [name]:data
      }));
    } else {
      const data=[...filterData[name],value]
      setfilterData((pre) => ({
        ...pre,
        [name]:  data
      }));
    }
  };

  console.log(filterData);
  const handleChangeType = (e) => {
    const { value, name, checked } = e.target;
  };

  const handleChangeSearch=(e)=>{
    const {name,value}=e.target
    setfilterData((pre)=>({
      ...pre,
      [name]:value
    }))

  }

  return (
    <div className="explorecar-section  bg-theme-gray">
      <Navigation />
      <Breadcrumb />
      <div className="row w-100">
        <div className="col-2 col-lg-2 col-md-2 d-none d-md-block  left-side bg-light-white  overflow-hidden">
          {/* <h1>test</h1> */}
          <div className="content py-4 ps-4 ">
            <div className="type">
              <h6 className="text-theme pb-3">Type</h6>
              {categories.map((item) => {
                return (
                  <CheckBoxComponent
                    labelname={item.name}
                    name="categories"
                    value={item.name}
                    id={item.id}
                    handleChange={handleChangeCheckbox}
                  />
                );
              })}
            </div>
            <div className="categories mt-3">
              <h6 className="text-theme pb-3">Capacity</h6>
              {capacity.map((item) => {
                return (
                  <CheckBoxComponent
                    handleChange={handleChangeCheckbox}
                    labelname={`${item.capacity} Person`}
                    id={item.id}
                    value={item.capacity}
                    name="capacities"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-10 col-12">
          <div className="search-bar px-3 pe-5">
            <input
              className="form-control me-2"
              type="search"
              name="searchText"
              placeholder="Search for cars..."
              aria-label="Search"
              onChange={handleChangeSearch}
            />
          </div>
          <div className="d-block d-md-none px-3 pt-2">
            <button
              className="btn btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span>
                <i className="bi bi-funnel fs-20"></i>&nbsp;Filter
              </span>
            </button>
          </div>
          <div className="car-section row mt-4">
            {carData &&
              carData?.map((car, index) => {
                const count = carData.length;
                if (index < count) {
                  return (
                    <CarCardComponent
                      bg="bg-theme-gray"
                      carDetail={car}
                      idindex={index}
                      handleClickBook={() => {}}
                    />
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Footer />
      <ModalComponent title={"Filter"} buttonName={"Apply"}>
        <div className="type">
          <h6 className="text-theme pb-3">Type</h6>
          {categories.map((item) => {
            return <CheckBoxComponent  id={item.id}
            labelname={item.name}
                    name="categories"
                    value={item.name}
                    handleChange={handleChangeCheckbox}
            />;
          })}
        </div>
        <div className="categories mt-3">
          <h6 className="text-theme pb-3">Capacity</h6>
          {capacity.map((item) => {
            return (
              <CheckBoxComponent
                id={item.id}
                handleChange={handleChangeCheckbox}
                labelname={`${item.capacity} Person`}
                value={item.capacity}
                name="capacities"
              />
            );
          })}
        </div>
      </ModalComponent>
    </div>
  );
};

export default ExploreCars;
