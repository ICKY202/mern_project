

import { axiosInstance } from ".";

export const RegisterUser = async (value) => {
    try {
        const response = await fetch("http://127.0.0.1:8083/api/user/register", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(value)});
        return response.data;
    }catch(err) {
        console.log(err);
    }
}

export const LoginUser = async (value) => {
    try {
        console.log(value);
        const response = await fetch("http://127.0.0.1:8083/api/user/login", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(value)});
        return response;
    }catch(err) {   
        console.log(err);
    }
}

export const getCurrentUser = async () => {
    try {
        const resp = await fetch("http://127.0.0.1:8083/api/user/currentUser", {method: "GET", headers: {"Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}}); 
        const data = await resp.json();
        return data.data;
    }catch(err) {
        console.log(err);
    }
}