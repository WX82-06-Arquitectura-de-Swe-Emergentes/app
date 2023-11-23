class HttpClient {
  private static instance: HttpClient;
  private readonly baseUrl: any;

  private constructor() {
    const config = useRuntimeConfig();
    this.baseUrl = config.public.apiBaseUrl;
  }

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  async get(url: string, opts: any) {
    return await $fetch(this.baseUrl + url, opts);
  }

  async post<T>(url: string, opts = {}) {
    return $fetch<T>(this.baseUrl + url, {
      method: "POST",
      ...opts
    });
  }

  async put<T>(url: string, opts = {}) {
    return await $fetch<T>(this.baseUrl + url, {
      method: "PUT",
    });
  }

  async patch<T>(url: string, opts = {}) {
    return await $fetch<T>(this.baseUrl + url, {
      method: "PATCH",
      ...opts
    });
  }

  async delete<T>(url: string, opts = {}) {
    return await $fetch<T>(this.baseUrl + url, {
      method: "DELETE",
      ...opts
    });
  }
}

export default HttpClient.getInstance();