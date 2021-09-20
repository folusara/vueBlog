import http from "./http";

export function signUp(data) {
    return http.post(`/signup`,data)
}
export function addPost(data) {
    return http.post(`/addpost`,data)
}
export function signIn(data) {
    return http.post(`/login`,data)
}

export function allposts() {
    return http.get(`allpost`)
}
export function deletee(id) {
    var token = localStorage.getItem("token")
    console.log(token);
    return http.post(`/deletepost`,id)
}

export function getPost(id) {
    return http.post(`/post?id=${id}`)
}