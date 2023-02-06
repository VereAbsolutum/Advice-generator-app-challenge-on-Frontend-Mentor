import { Advice } from "../../domain/model";
import { GetAdvice } from "../../domain/usecase";
import { RemoteAdvice } from "../model";
import { HttpCliente, HttpStatusCode } from "../protocols/http-cliente";

export class RemoteGetAdvice implements GetAdvice {
    constructor(
        private readonly httpCliente: HttpCliente<RemoteAdvice>,
        private readonly url: string
    ) {}

    async loadAll (): Promise<Advice> {
        const httpResponse = await this.httpCliente.request({
            url: this.url,
            method: 'get'
        })
        const remoteAdvice = httpResponse.body!
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return { id: remoteAdvice.slip.id, message: remoteAdvice.slip.advice }
            default: throw new Error('ERROR: Something goes wrong with server!')
        }
    };
}