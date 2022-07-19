import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public static version = "1.1.4";
  public static backClicked = false;
  public static hideSplash = false;
  public static readyFired = false;
  public static notificationEvent: (message: any) => void;
  public static rootPages = [
    '/login'
  ];
  public static idioma: string = 'es';
  public static idiomaId: number = 1;
  public static totalPasosPresupuesto: number = 6;
  public static totalPasosPresupuestoLogueado: number = 6;
  public static modals: any[] = []
  constructor() { }
}
