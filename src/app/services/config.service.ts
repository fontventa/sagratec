import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //#region Propiedades

  private nombreAplicacion: string;
  private urlService: string;
  private urlIntranet: string;

  //#endregion

  //#region Init

  constructor() {
    this.nombreAplicacion = 'Sagratec';

    this.urlIntranet = 'https://apisagratecualc.azurewebsites.net/'; // Producción


    this.urlService = this.urlIntranet + 'api';
  }

  //#endregion

  //#region Funciones

  public getUrlService(noApi?: boolean): string {
    if (noApi !== undefined && noApi === true) {
      return this.urlIntranet;
    } else {
      return this.urlService;
    }
  }

  public getNombreAplicacion() {
    return this.nombreAplicacion;
  }  
  //#endregion

}
