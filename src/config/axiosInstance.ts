import axios from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        withoutToast?: boolean;
    }
}

const options = {
    baseURL: import.meta.env.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer {{token}}",
    },
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config) => {
    console.log(config.url, " - request -", config.data);
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response?.data?.messages && !response.config.withoutToast) {
            response.data.messages.forEach((message: unknown) => {
                console.log(message);
            });
        }
        return response;
    },
    (error) => {
        console.log(
            error.response.config.url,
            "- error response -",
            error.response?.data
        );
        return Promise.reject(error);
    }
);

export default axiosInstance;