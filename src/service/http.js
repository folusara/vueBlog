import  axios  from "axios";

const http = axios.create({
    baseURL: "http://api.lawkonet.com/public/api",
})


export default http