import {$Fetch, ExtractedRouteMethod, NitroFetchOptions, NitroFetchRequest, TypedInternalResponse} from "nitropack";

class HttpClient {
  private static instance: HttpClient;
  private readonly baseUrl: any;

  private constructor() {
    const config = useRuntimeConfig();
    this.baseUrl = config.public.apiBaseUrl;
  }

  static getInstance() : HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  async get(url: string, opts: any): Promise<$Fetch> {
    return await $fetch(this.baseUrl + url, opts);
  }
  async post(url: string, opts = {}): Promise<$Fetch> {
    return await $fetch(this.baseUrl + url, {
      method: "POST",
      ...opts
    });
  }
  async put<T>(url: string, opts = {}) {
    return await $fetch<T>(this.baseUrl + url, {
      method: "PUT",
      ...opts
    });
  }
  async patch<T>(url: string, opts = {}) {
    return await $fetch<T>(this.baseUrl + url, {
      method: "PATCH",
      ...opts
    });
  }

  async delete<T>(url: string, opts = {}) {
    const response = await $fetch<T>(this.baseUrl + url, {
      method: "DELETE",
      ...opts
    });
  }
}

export default HttpClient.getInstance();