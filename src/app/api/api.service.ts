import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import ResultClass from '../../models/general/result.model';
import { NavController } from '@ionic/angular';
import { PresupuestosService } from './presupuestos/presupuestos.service';
import * as $ from "jquery";
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public URL: string
  public loginToken: string
  public logged: boolean;

  constructor(
    public Login: LoginService,
    public Presupuesto: PresupuestosService,
    public http: HttpClient,
    public navCtrl: NavController
  ) {

    this.URL = "https://apisagratecualc.azurewebsites.net/api";
    this.Login.api = this
    this.Presupuesto.api = this

  }

  public async HttpGet<T>(url: string, params?: any, token?: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {

      let headers = new HttpHeaders()
      headers = headers.append('Content-Type', 'application/json')

      if (token != null && token != undefined && token != "") {
        headers = headers.append('SgtToken', token)
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
        } else if (data.content != null) {
          resolve(data.content)
        } else {
          const res: any = data;
          resolve(res)
        }
      }, (err) => {

        if (err.status == 403 && url != '/sagrateclogin') {

          this.Login.clearToken();
          this.navCtrl.navigateRoot("login");

        } else {

          if (err.error.Message) {

            if (err.error.Message == "Error en el token de seguridad.") {

              this.Login.clearToken();
              this.navCtrl.navigateRoot("login");

            } else {

              reject({ Message: err.error.Message });

            }

          } else if (err.error.Caption) {

            reject({ Message: err.error.Caption });

          } else {

            reject(err);

          }

        }
      })

    })
  }

  public async HttpPost<T>(url: string, params?: any, token?: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {

      let headers = new HttpHeaders()
      headers = headers.append('Content-Type', 'application/json')

      if (token != null && token != undefined && token != "") {
        headers = headers.append('SgtToken', token)
      }

      params = params || {}

      const options = {
        headers: headers,
        withCredentials: true
      }

      this.http.post<ResultClass<T>>(this.URL + url, JSON.stringify(params), options).subscribe(data => {
        if (data.Error && data.Error.HasError) {
          reject(new Error(data.Error.Message))
        } else if (data.content != null) {
          resolve(data.content)
        } else {
          const res: any = data;
          resolve(res)
        }
      }, (err) => {

        if (err.status == 403 && url != '/sagrateclogin') {

          this.Login.clearToken();
          this.navCtrl.navigateRoot("login");

        } else {

          if (err.error.Message) {

            if (err.error.Message == "Error en el token de seguridad.") {

              this.Login.clearToken();
              this.navCtrl.navigateRoot("login");

            } else {

              reject({ Message: err.error.Message });

            }

          } else if (err.error.Caption) {

            reject({ Message: err.error.Caption });

          } else {

            reject(err);

          }

        }

      })

    })
  }

  public PerformRequest<T>(URL: string, options: JQuery.AjaxSettings<any>, token?: string): Promise<T> {
    return new Promise<any>((resolve, reject) => {

      // Realiza el request solicitado.
      let headers = options.headers || {};
      if (token != null && token != undefined && token != "") {
        headers["SgtToken"] = token;
      }
      options.headers = headers;
      $.ajax(this.URL + URL, options).done((result: T) => {
        resolve(result);
      }).fail((err: any) => {
        if (err.status == 403 && URL != '/sagrateclogin') {
          this.navCtrl.navigateRoot("login");
        } else {
          if (err.error.Message) {
            reject({ Message: err.error.Message });
          } else if (err.error.Caption) {
            reject({ Message: err.error.Caption });
          }

          reject(err);
        }
      })

    });
  }

}
