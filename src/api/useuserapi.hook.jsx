import { END_POINT } from "../config";
import { API_RESPONSE_STATUS, ResponseModel, useApi } from "./useapi.hook";

const useUserApi = (initialUrl) => {
  const { handleAxiosPostAsync,handleAxiosPutAsync } = useApi();
  let responseModel = new ResponseModel();

  const signUp = async (data) => {
    // const data={}
    try {
      responseModel = await handleAxiosPostAsync(
        data,
        `${END_POINT.USER}/signup`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const signIn = async (data) => {
    const values={
      email:data.emailId,
      password:data.password
    }
    try {
      responseModel = await handleAxiosPostAsync(
        values,
        `${END_POINT.USER}/signin`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
    
  };
  const updateProfile = async (data,userId) => {
   debugger
    try {
      responseModel = await handleAxiosPutAsync(
        data,
        `${END_POINT.USER}/${userId}`
      );
      if (
        responseModel &&
        responseModel.status === API_RESPONSE_STATUS.SUCCESS
      ) {
        return responseModel;
      }
    } catch (err) {
      throw new Error(err);
    }
  }



  return { signIn, signUp, updateProfile};
};

export default useUserApi;
