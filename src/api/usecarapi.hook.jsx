import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT } from "../config";
import { useApi } from "./useapi.hook";

const useCarApi = (initialUrl) => {
  
  const { handleAxiosPostAsync } = useApi();
  // const carUrl=
  const fetchCarData = async (id) => {
    try {
      const response = await axios.get(`${END_POINT.CAR}/${id}`);
      return response.data;
    } catch (err) {
    } 
  };

  const searchCar = async (data) => {
    try {
      const response = await handleAxiosPostAsync(`${END_POINT.CAR}/search`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };

  

  return { fetchCarData, searchCar };
};

export default useCarApi;
