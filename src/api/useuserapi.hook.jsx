import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT } from "../config";
import { useApi } from "./useapi.hook";

const useCarApi = (initialUrl) => {
  const [data, setData] = useState(null);
  const {handleAxiosPostAsync}=useApi()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const carUrl=
  const fetchCarData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${END_POINT.CAR}/${id}`);
      return response.data;
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${END_POINT.CAR}/signup`, data);
      return response.data.result;
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateCar = async (id, carData) => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/car/${id}`, carData);
      return response;
      setError(null);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCar = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/car/${id}`);
      setData((prevData) => prevData.filter((car) => car.car_id !== id));
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchCarData, updateCar, deleteCar };
};

export default useCarApi;
