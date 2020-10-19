import axios, { AxiosResponse, Method } from 'axios';

export abstract class Service {
  static doRequest(
    requestMethod: Method,
    requestUrl: string = 'proteste/' + 'auth/authenticate',
    requestData: Object,
  ): Promise<AxiosResponse> {
    return axios.request({
      method: requestMethod,
      baseURL: 'https://directus.proteste.org.br/directus/public/',
      timeout: 25000,
      url: requestUrl,
      data: requestData,
    });
  }
}