import http from "./http";


export default function getNews() {
    return http.get(`/everything?q=bitcoin&apiKey=4e2cb5b3d4b94ec6a509b8ae46de10bc`)
}