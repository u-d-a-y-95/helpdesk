class Http {
  constructor(private baseUrl: string) {}

  private getFullUrl(url: string) {
    return this.baseUrl + url;
  }

  get(url: string) {
    const fullUrl = this.getFullUrl(url);
    return fetch(fullUrl, {
      method: "get",
    });
  }

  async post(url: string, body: any) {
    const fullUrl = this.getFullUrl(url);
    const fetched = await fetch(fullUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    });
    return fetched.json();
  }
}

export const http = new Http("http://localhost:4000");
