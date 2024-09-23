import React from 'react'
import axios from 'axios';
import { ResponseModel } from '../utility';
export const useApi = () => {
    let responseclass = new ResponseModel({});
    const handleAxiosPostAsync=async(requestModel,requestUrl,isAuthorizationRequired=false)=>{
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
            if (requestModel && requestModel !== null && requestModel !== undefined) {
                response = await axios.post(requestUrl, requestModel, config);
            }
            else {
                response = await axios.post(requestUrl, config);
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
  return {handleAxiosPostAsync}
}

// export default useApi
