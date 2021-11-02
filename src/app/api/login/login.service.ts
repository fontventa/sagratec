import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import LoginResult from '../../../models/login/loginResult.model';
import UserModel from '../../../models/login/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api: ApiService

  public usuario: UserModel;

  constructor() { }

  public async login(codigo: string, user: string, password: string): Promise<LoginResult> {
    return await this.api.HttpPost<LoginResult>('/sagrateclogin', {
      PrefijoLicencia: "4520",
      CodigoCliente: codigo,
      User: user,
      Clave: password
    })
  }

  public setLogin(loginRes: LoginResult, codigo: string, user: string, password: string) {
    this.usuario = new UserModel;

    this.usuario.NombreCompleto = user;
    this.usuario.Codigo = codigo;
    this.usuario.Token = loginRes.Token;

    this.api.loginToken = loginRes.Token;

    localStorage.setItem('token', loginRes.Token);
    localStorage.setItem('ogidoccetargas', codigo);
    localStorage.setItem('emanresucetargas', user);
    localStorage.setItem('drowssapcetargas', password);

    this.api.logged = true;
  }

  public logOut() {

    this.api.logged = false;
    this.api.Login.usuario = null;
    this.api.loginToken = null;

    localStorage.removeItem('token');
    localStorage.removeItem('ogidoccetargas');
    localStorage.removeItem('emanresucetargas');
    localStorage.removeItem('drowssapcetargas');

  }


}
