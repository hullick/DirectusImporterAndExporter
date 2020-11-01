import axios, { AxiosResponse, Method } from 'axios';

export abstract class Service {
  static doRequest(
    requestMethod: Method,
    requestUrl: string,
    requestData?: Object,
    extraHeaders?: Object,
  ): Promise<AxiosResponse> {
    const avaliableHeaders = {};

    return axios.request({
      method: requestMethod,
      baseURL: 'https://directus.proteste.org.br/directus/public/',
      timeout: 25000,
      url: `proteste/${requestUrl}`,
      data: requestData,
      headers: (<any>Object).assign(avaliableHeaders, extraHeaders),
    });
  }
}