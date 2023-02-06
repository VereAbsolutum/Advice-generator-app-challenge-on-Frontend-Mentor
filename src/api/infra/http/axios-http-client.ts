import { HttpCliente, HttpRequest, HttpResponse } from "../../data/protocols/http-cliente";

import axios, { AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpCliente {
    async request (data: HttpRequest): Promise<HttpResponse<any>> {
        let axiosResponse: AxiosResponse 
        try {
            axiosResponse = await axios.request({
                headers: data.headers,
                method: data.method,
                data: data.body,
                url: data.url
            })
        } catch (error: any) {
            axiosResponse = error.response
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data 
        }
    }
}