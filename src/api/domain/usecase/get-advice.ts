import { Advice } from "../model";

export interface GetAdvice {
    loadAll: () => Promise<GetAdvice.Model>
}

export namespace GetAdvice {
    export type Model = Advice;
}