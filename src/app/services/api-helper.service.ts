import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
// import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {

  private readonly base_url: string = environment.api_url;

  constructor(private http: HttpClient) { }


  public get({ endpoint, queryParams = {} }: {
    endpoint: string;
    queryParams?: any;
  }): Promise<any> { 
    environment
    return this.request({ endpoint, method: 'GET', queryParams });
  }


  public post({ endpoint, data = {}, queryParams = {} }: {
    endpoint: string;
    data?: any;
    queryParams?: any;
  }): Promise<any> {
    return this.request({ endpoint, method: 'POST', data, queryParams });
  }


  public put({ endpoint, data = {}, queryParams = {} }: {
    endpoint: string;
    data?: any;
    queryParams?: any;
  }): Promise<any> {
    return this.request({ endpoint, method: 'PUT', data, queryParams });
  }


  public delete({ endpoint, data = {}, queryParams = {} }: {
    endpoint: string;
    data?: any;
    queryParams?: any;
  }): Promise<any> {
    return this.request({ endpoint, method: 'DELETE', data, queryParams });
  }


  public async request({ endpoint, method = 'GET', data = {}, queryParams = {} }: {
    endpoint: string;
    method?: string;
    data?: object;
    queryParams?: any;
  }): Promise<any> {

    const methodWanted = method.toLowerCase();
    const url = this.base_url + endpoint;
    const requestOptions = { params: queryParams };

    console.log(method, url, JSON.stringify(requestOptions), JSON.stringify(data));

    let req: Observable<any>;

    switch (methodWanted) {
      case 'get':
        req = this.http.get(url, { ...requestOptions, observe: 'response' });
        break;
      case 'post':
        req = this.http.post(url, data, {
          ...requestOptions,
          observe: 'response',
        });
        break;
      case 'put':
        req = this.http.put(url, data, {
          ...requestOptions,
          observe: 'response',
        });
        break;
      case 'delete':
        req = this.http.delete(url, { ...requestOptions, observe: 'response' });
        break;
      default:
        throw new Error(`invalid method ${methodWanted}`);
    }

    if (!req) {
      throw new Error(`error calling ${url} with method ${methodWanted}`);
    }

    return await lastValueFrom(req).then((res) => {
      return res.body;
    });
  }
}

