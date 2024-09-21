import { END_POINT } from "../config";
import { API_RESPONSE_STATUS, ResponseModel, useApi } from "./useapi.hook";

const useUserApi = (initialUrl) => {
  const { handleAxiosPostAsync } = useApi();
  const responseModel = new ResponseModel();

  const signUp = async (data) => {
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
    try {
      responseModel = await handleAxiosPostAsync(
        data,
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

  return { signIn, signUp };
};

export default useUserApi;
