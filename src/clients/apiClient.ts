import axios, { AxiosRequestConfig, Method, AxiosResponse, AxiosError } from "axios"
import { isNullOrUndefined } from "util";
import { inject, injectable } from "inversify";
import { Logger } from "../logger";

@injectable()
export class ApiClient {
    private baseUrl: string | undefined = "http://localhost:3000/api/v1";

    constructor(@inject(Logger) private logger: Logger) {

    }

    async post(url: string, headers: any, body: any) {
        var retVal = null

        const config: AxiosRequestConfig = {
            method: "POST",
            url: `${this.baseUrl}${url}`
        }

        if (!isNullOrUndefined(headers))
            config.headers = headers
        else
            config.headers = {
                accept: "application/json"
            }

        if (!isNullOrUndefined(body))
            config.data = body;

        await axios(config)
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

