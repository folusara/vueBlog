import http from "./http";

export function signUp(data) {
    return http.post(`/signup`,data)
}
export function signIn(data) {
    return http.post(`/login`,data)
}