import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParamsService {

  email: string;
  hash: string;
  constructor() { }

  clear(clearLoginData: boolean): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (clearLoginData) {
        this.email = '';
        this.hash = '';
      }
    });
  }
}
