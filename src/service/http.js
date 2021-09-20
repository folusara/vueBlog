import  axios  from "axios";

const http = axios.create({
    baseURL: "http://api.lawkonet.com/public/api",
    headers:{
        "Authorization" : "Bearer " + localStorage.getItem("token"),
        "Accept" : "application/json",
        "content-Type" : "application/json"
    }
})


export default http