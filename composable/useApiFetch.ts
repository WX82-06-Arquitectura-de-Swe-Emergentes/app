import {useFetch} from "#app";

export const useApiFetch = async <T> (url: string, opts = {}) => {
    const config = useRuntimeConfig();
    return useFetch<T>(config.public.apiBaseUrl + url, opts);
}