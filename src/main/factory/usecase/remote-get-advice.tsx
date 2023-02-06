import { RemoteGetAdvice } from "../../../api/data/usecase/remote-get-advice";
import { makeApiUrl, makeAxiosHttpClient } from "../http";

export const makeRemoteGetAdvice = (): RemoteGetAdvice =>  
    new RemoteGetAdvice(makeAxiosHttpClient(), makeApiUrl())
