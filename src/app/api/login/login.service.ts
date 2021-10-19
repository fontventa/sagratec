import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import LoginResult from '../../../models/login/loginResult.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api: ApiService

  constructor() { }

  public async login(username: string, password: string): Promise<LoginResult> {
    return await this.api.HttpPost<LoginResult>('/login', {
      username: username,
      password: password
    })
  }

}
