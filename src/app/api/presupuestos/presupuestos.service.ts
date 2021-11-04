import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import PresupuestosModel from '../../../models/presupuestos/PresupuestosModel';
import ClientesDatosFiscalesModel from '../../../models/presupuestos/ClientesDatosFiscalesModel';
import PresupuestosArchivosModel from '../../../models/presupuestos/PresupuestosArchivosModel';
import PresupuestosSeriesModel from '../../../models/presupuestos/PresupuestosSeriesModel';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  public api: ApiService

  constructor() { }

  public async getDatosPresupuesto(serie: string, presupuesto: string): Promise<PresupuestosModel[]> {
    const token = this.api.loginToken;

    return await this.api.HttpGet<PresupuestosModel[]>('/PptoDatosGenerales/' + (serie != undefined && serie != null && serie != "" ? serie + "/" : "") + presupuesto, {}, token)

  }

  public async getClienteDatosFiscales(codigo: string): Promise<ClientesDatosFiscalesModel[]> {
    const token = this.api.loginToken;

    return await this.api.HttpGet<ClientesDatosFiscalesModel[]>('/ClientesDatosFiscales/' + codigo, {}, token)

  }

  public async getNumerosSerie(): Promise<PresupuestosSeriesModel[]> {
    const token = this.api.loginToken;

    return await this.api.HttpGet<PresupuestosSeriesModel[]>('/Contadores/GetListByDocument/Presupuesto', {}, token)

  }

  public async getFicherosCarpeta(serie: string, presupuesto: string, subdirectorios: string): Promise<PresupuestosArchivosModel[]> {
    const token = this.api.loginToken;

    return await this.api.HttpGet<PresupuestosArchivosModel[]>('/ArchivosAFS/Presupuestos/' + (serie != undefined && serie != null && serie != "" ? serie : "") + presupuesto, {
      subdirectorios: subdirectorios
    }, token)

  }

  public async postSubirFicherosCarpeta(serie: string, presupuesto: string, subdirectorios: string, files: any): Promise<PresupuestosArchivosModel[]> {
    const token = this.api.loginToken;

    return await this.api.PerformRequest<PresupuestosArchivosModel[]>('/ArchivosAFS/UploadFiles/Presupuestos/' + (serie != undefined && serie != null && serie != "" ? serie : "") + presupuesto + "/?subdirectorios=" + subdirectorios, {
      method: 'POST',
      type: 'POST',
      data: files,
      contentType: false,
      processData: false,
      cache: false
    }, token)

  }

  public async deleteFicherosCarpeta(serie: string, presupuesto: string, subdirectorios: string, archivo: string): Promise<PresupuestosArchivosModel[]> {
    const token = this.api.loginToken;

    return await this.api.PerformRequest<PresupuestosArchivosModel[]>('/ArchivosAFS/DeleteFile/Presupuestos/' + (serie != undefined && serie != null && serie != "" ? serie : "") + presupuesto + "/?subdirectorios=" + subdirectorios + "&archivo=" + archivo, {
      method: 'DELETE',
      type: 'DELETE',
      contentType: false,
      processData: false,
      cache: false
    }, token)

  }

}
