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