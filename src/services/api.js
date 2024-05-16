import axios from "axios";
import { getToken } from "./UsuarioService.js";
import Vue from 'vue'

const base = axios.create({
    baseURL: "",
});

Vue.prototype.$http = base;
Vue.prototype.$http.interceptors.request.use(
    config => {
        let accessToken = getToken();
        if (accessToken) {
            config.headers = Object.assign({
                Authorization: `Bearer ${accessToken}`
            }, config.headers);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);