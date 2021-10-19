import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import ResultClass from '../../models/general/result.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public URL: string
  public loginToken: string

  constructor(
    public Login: LoginService,
    public http: HttpClient
  ) { 

    this.Login.api = this

  }

  public async HttpGet<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {

      let headers = new HttpHeaders()
      headers = headers.append('Content-Type', 'application/json')
      if (this.loginToken != null) {
        headers = headers.append('Access-Token', this.loginToken)
      }

      params = params || {}
      let httpParams = new HttpParams()
      for (let param in params) {
        if (params[param] != null) {
          httpParams = httpParams.set(param, params[param].toString())
        } else {
          httpParams = httpParams.set(param, '')
        }
      }

      const options = {
        headers: headers,
        withCredentials: true,
        params: httpParams
      }

      this.http.get<ResultClass<T>>(this.URL + url, options).subscribe(data => {
        if (data.Error && data.Error.HasError) {
          reject(new Error(data.Error.Message))
        } else {
          resolve(data.content)
        }
      }, (err) => {
        reject(new Error(err))
      })

    })
  }

  public async HttpPost<T>(url: string, params?: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {

      let headers = new HttpHeaders()
      headers = headers.append('Content-Type', 'application/json')
      if (this.loginToken != null) {
        headers = headers.append('Access-Token', this.loginToken)
      }

      params = params || {}
      const options = {
        headers: headers,
        withCredentials: true
      }

      this.http.post<ResultClass<T>>(this.URL, JSON.stringify(params), options).subscribe(data => {
        if (data.Error && data.Error.HasError) {
          reject(new Error(data.Error.Message))
        } else {
          resolve(data.content)
        }
      }, (err) => {
        reject(new Error(err))
      })

    })
  }

}
