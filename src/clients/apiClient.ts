import axios, { AxiosRequestConfig, Method, AxiosResponse, AxiosError } from "axios"
import { isNullOrUndefined } from "util";
import { inject, injectable } from "inversify";
import { Logger } from "../logger";

@injectable()
export class ApiClient {

    private baseUrl: string | undefined = "http://localhost:3000/api/v1";

    constructor(@inject(Logger) private logger: Logger) {
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            if(!isNullOrUndefined(config) && !isNullOrUndefined(config.headers) && !isNullOrUndefined(config.headers.common)) {
                var headers = config.headers.common;
                if (isNullOrUndefined(headers.Accept)) {
                    headers.Accept = "application/json"
                }
            }
            // Do something before request is sent
            console.log("Config: ",config)
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
    }

    async post(url: string, headers: any, body: any) {
        var retVal = null

        const config: AxiosRequestConfig = {}

        if (!isNullOrUndefined(url))
            config.url = `${this.baseUrl}${url}`
        if (!isNullOrUndefined(headers))
            config.headers = headers
        if (!isNullOrUndefined(body))
            config.data = body;

        axios.post(config.url!, config.data)
            .then((response: AxiosResponse) => {
                console.log(response)
                retVal = response
            })
            .catch((error: AxiosError) => {
                console.log(error)
            })
        return retVal;
    }
}

