class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  private buildUrl(url: string, params?: Record<string, any>): string {
    if (!params) return `${this.baseUrl}${url}`;
    const query = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    return `${this.baseUrl}${url}?${query}`;
  }

  request<T>(
    method: string,
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const upperMethod = method.toUpperCase();

      const fullUrl =
        upperMethod === "GET" && data
          ? this.buildUrl(url, data)
          : `${this.baseUrl}${url}`;

      xhr.open(upperMethod, fullUrl);

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      if (upperMethod !== "GET" && (!headers || !headers["Content-Type"])) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response: T = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            resolve(xhr.responseText as unknown as T);
          }
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
            response: xhr.responseText,
          });
        }
      };

      xhr.onerror = () => {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      };

      if (upperMethod === "GET") {
        xhr.send();
      } else {
        xhr.send(data ? JSON.stringify(data) : null);
      }
    });
  }

  get<T>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>("GET", url, params, headers);
  }

  post<T>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>("POST", url, data, headers);
  }

  put<T>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>("PUT", url, data, headers);
  }

  delete<T>(
    url: string,
    data?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>("DELETE", url, data, headers);
  }
}
