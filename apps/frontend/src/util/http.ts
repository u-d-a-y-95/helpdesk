enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

type HttpOption = {
  token: string;
};
class Http {
  constructor(private baseUrl: string) {}

  private getFullUrl(url: string) {
    return this.baseUrl + url;
  }

  private async request(
    url: string,
    method: HttpMethod,
    body: string | null = null,
    option: HttpOption
  ) {
    const headers = Object.assign(
      {
        "Content-Type": "application/json",
      },
      {
        authorization: `Bearer ${option.token}`,
      }
    );
    const fetched = await fetch(url, {
      method,
      headers,
      body,
    });
    return fetched.json();
  }

  async get(url: string, option: HttpOption) {
    const fullUrl = this.getFullUrl(url);
    return this.request(fullUrl, HttpMethod.GET, null, option);
  }

  async post(url: string, body: any, option: HttpOption) {
    const fullUrl = this.getFullUrl(url);
    const formatedBody = JSON.stringify(body);
    return this.request(fullUrl, HttpMethod.POST, formatedBody, option);
  }
}

export const http = new Http("http://localhost:4000");
