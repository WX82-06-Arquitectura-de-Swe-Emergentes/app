import {useFetch} from "#imports";
import type {UseFetchOptions} from "#app";
import type {KeysOf} from "#app/composables/asyncData";

export const useApiFetch = (request : any, opts :  UseFetchOptions<unknown, unknown, KeysOf<unknown>, null, any, "get"> = {}) => {
    const config = useRuntimeConfig();

    return useFetch(request, {
        baseURL: config.public.baseURL,
        ...opts
    })
}