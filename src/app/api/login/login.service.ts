import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import LoginResult from '../../../models/login/loginResult.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api: ApiService

  public usuario: LoginResult;

  constructor() { }

  public async login(username: string, password: string): Promise<LoginResult> {
    return await this.api.HttpPost<LoginResult>('/sagrateclogin', {
      PrefijoLicencia: "4520",
      CodigoCliente: "0",
      User: username,
      Clave: password
    })
  }

  public setLogin(user: LoginResult): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            this.usuario = user;
            this.api.loginToken = user.Token;
            localStorage.setItem('token', user.Token)
            resolve()

        } catch (ex) {
            reject(new Error(ex.message))
        }

    })
}

}
