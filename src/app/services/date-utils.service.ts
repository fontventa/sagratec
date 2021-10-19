import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  public today = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  public currentYear: number = new Date().getFullYear();
  public minYear: number = new Date().getFullYear() - 2;
  public maxYear: number = new Date().getFullYear() + 2;

  public cancelText = 'Cancelar';
  public doneText = 'Aceptar';
  public displayFormatDMY = 'DD MM YYYY';
  public displayFormatMY = 'MMM YYYY';

  public dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  public dayShortNames = ['Dom.', 'Lun', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'];
  public monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public monthShortNames = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'];

  constructor() { }
}
