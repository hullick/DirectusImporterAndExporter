import axios, { AxiosResponse, Method } from 'axios';
import { EnvironmentService } from './environment.service';

export abstract class Service {
  static doRequest(
    requestMethod: Method,
    requestUrl: string,
    requestData?: Object,
    extraHeaders?: Object,
  ): Promise<AxiosResponse> {
    return axios.request({
      method: requestMethod,
      baseURL: EnvironmentService.getEnvironment().baseUrl,
      timeout: EnvironmentService.getEnvironment().requestTimeout,
      url: `${EnvironmentService.getEnvironment().project}/${requestUrl}`,
      data: requestData,
      headers: extraHeaders,
    });
  }
}