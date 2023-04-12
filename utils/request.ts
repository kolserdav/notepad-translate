import { TRANSLATE_URL } from "./constants";
import { log } from "./lib";

class Request {
  private async send(
    url: string,
    {
      body: _body,
      method,
      headers: _headers,
    }: {
      method: "GET" | "POST" | "PUT" | "DELETE";
      body?: any;
      headers?: Record<string, string>;
    }
  ) {
    const headers = _headers || {};
    if (
      !Object.keys(headers).find((key) => key.toLowerCase() == "content-type")
    ) {
      headers["Content-Type"] = "application/json";
    }

    let body: string | undefined = "";
    try {
      body = body ? JSON.stringify(_body) : undefined;
    } catch (e) {}

    const res = await fetch(url, {
      method,
      body,
      headers,
    });
    let data: any = { error: "Message Error" };
    try {
      data = await res.json();
    } catch (e) {
      log("warn", "Failed request", res);
    }
    return data;
  }

  public async translate({
    q,
    source,
    target,
  }: {
    q: string;
    source: string;
    target: string;
  }) {
    return this.send(`${TRANSLATE_URL}/translate`, {
      method: "POST",
      body: {
        q,
        source,
        target,
        format: "text",
        api_key: "44c748aa-0854-41cb-9b5f-c274f750ea2a",
      },
    });
  }

  public async getLanguages() {
    return this.send(`${TRANSLATE_URL}/languages1`, {
      method: "GET",
    });
  }
}

export default new Request();
