import axiosInstance from "./axiosinstance"

//api request
const apiservice = async (httpmethod, url, reqbody) => {

    const reqConfig = {
        method: httpmethod,
        url,                         //both key and value is same so use url
        data: reqbody
    }

    try {
        const result = await axiosInstance(reqConfig)
        return result
    }
    catch (err) {
        return err
    }

}

export default apiservice