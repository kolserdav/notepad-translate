import { TRANSLATE_URL } from "./constants";
import { log } from "./lib";

interface Result {
  error?: string;
}

interface TranslateResult extends Result {
  translatedText?: string;
}

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
      body = _body ? JSON.stringify(_body) : undefined;
    } catch (e) {}

    const res = await fetch(url, {
      method,
      body,
      headers,
    }).catch((e) => {
      log("error", "Failed request", { e, url, headers, body });
    });
    let data: any = { error: "Message Error" };
    if (!res) {
      return data;
    }

    try {
      data = await res.json();
    } catch (e) {
      /** */
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
  }): Promise<TranslateResult> {
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
    return this.send(`${TRANSLATE_URL}/languages`, {
      method: "GET",
    });
  }
}

export default new Request();
