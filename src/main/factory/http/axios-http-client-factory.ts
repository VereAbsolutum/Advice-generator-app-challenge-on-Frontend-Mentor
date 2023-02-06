import { AxiosHttpClient } from "../../../api/infra/http/axios-http-client";

export const makeAxiosHttpClient = () : AxiosHttpClient => new AxiosHttpClient()