import React from 'react'
import axios from 'axios';
export class ResponseModel {
    data = [];
    status = 0;
    errormessage = "";
    isSucess = false;
    message = "";
  }
  
  export const API_RESPONSE_STATUS = {
    SUCCESS: 200,
    FAIL: 400,
    ERROR: 500,
    UNAUTHORIZED: 401,
    CHANGE: 5,
    ALREADYLOGIN: 6,
  };
export const useApi = () => {
    let responseclass = new ResponseModel();
    let handleAxiosPostAsync=async(requestModel,requestUrl,isAuthorizationRequired=false)=>{
        let config;
        if (isAuthorizationRequired === true) {
            config = {
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    // 'Authorization': getAuthKey()
                }
            }
        }
        else {
            config = {
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        }
        try {
            debugger
            let response;
            if (requestModel && requestModel !== null && requestModel !== undefined) {
                response = await axios.post(requestUrl, requestModel, config);
            }
            else {
                response = await axios.post(requestUrl, config);
            }
            responseclass = response.data.result;
        } catch (error) {
            throw new Error(error)
            // errorLog(error, requestModel, methodName, requestUrl).then(res => {
            //     handleNotify(ERRORMESSAGE.TRYAGAIN, ToasterPositions.TopRight, ToasterTypes.Error);
            // })
            // handleNotify("Something went wrong!", ToasterPositions.BottomRight, ToasterTypes.Error)
        }
        return responseclass;
    
    }
    const handleAxiosPutAsync=async(requestModel,requestUrl,isAuthorizationRequired=false)=>{
        let config;
        if (isAuthorizationRequired === true) {
            config = {
                headers: {
                    // 'content-type': 'application/json',
                    'Content-Type': 'multipart/form-data', // This is optional, Axios sets it automatically

                    //'Accept': 'application/json',
                    // 'Authorization': getAuthKey()
                }
            }
        }
        else {
            config = {
                headers: {
                    // 'content-type': 'application/json'
                        'Content-Type': 'multipart/form-data', // This is optional, Axios sets it automatically

                }
            }
        }
        try {
            let response;
            if (requestModel && requestModel !== null && requestModel !== undefined) {
                response = await axios.put(requestUrl, requestModel, config);
            }
            else {
                response = await axios.put(requestUrl, config);
            }
            responseclass = await JSON.parse(response.data.result);
        } catch (error) {
            throw new Error(error)
            // errorLog(error, requestModel, methodName, requestUrl).then(res => {
            //     handleNotify(ERRORMESSAGE.TRYAGAIN, ToasterPositions.TopRight, ToasterTypes.Error);
            // })
            // handleNotify("Something went wrong!", ToasterPositions.BottomRight, ToasterTypes.Error)
        }
        return responseclass;
    
    }
    const handleAxiosGetAsync=async(requestUrl,isAuthorizationRequired=false)=>{
        let config;
        if (isAuthorizationRequired === true) {
            config = {
                headers: {
                    'content-type': 'application/json',
                    //'Accept': 'application/json',
                    // 'Authorization': getAuthKey()
                }
            }
        }
        else {
            config = {
                headers: {
                    'content-type': 'application/json'
                }
            }
        }
        try {
            let response;
            if (requestUrl && requestUrl !== null && requestUrl !== undefined) {
                response = await axios.get(requestUrl, config);
            }
            else {
                response = await axios.get(requestUrl, config);
            }
            responseclass = await JSON.parse(response.data.result);
        } catch (error) {
            throw new Error(error)
            // errorLog(error, requestModel, methodName, requestUrl).then(res => {
            //     handleNotify(ERRORMESSAGE.TRYAGAIN, ToasterPositions.TopRight, ToasterTypes.Error);
            // })
            // handleNotify("Something went wrong!", ToasterPositions.BottomRight, ToasterTypes.Error)
        }
        return responseclass;
    
    }
  return {handleAxiosPostAsync,handleAxiosPutAsync,handleAxiosGetAsync}


}

// export default useApi
