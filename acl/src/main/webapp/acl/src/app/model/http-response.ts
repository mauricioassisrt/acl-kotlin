export class HttpResponse {
  httpCode: number;
  token: string;

  constructor(httpCode: number, token: string) {
    this.httpCode = httpCode;
    this.token = token;
  }
}
