export interface HttpCliente<R = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpResponse<R = any> = {
    statusCode: HttpStatusCode
    body?: R
}

export enum HttpStatusCode  {
    ok = 200,
    notFound = 404,
    badRequest = 400
}

export type HttpRequest = {
    url: string,
    method: string,
    body?: any, 
    headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

