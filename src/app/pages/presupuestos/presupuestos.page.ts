import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import PresupuestosModel from '../../../models/presupuestos/PresupuestosModel';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.page.html',
  styleUrls: ['./presupuestos.page.scss'],
})
export class PresupuestosPage implements OnInit {

  public Presupuesto: PresupuestosModel;
  public buscando: boolean;
  public carpetaFicheros: string;

  public ready: boolean;
  public myForm: FormGroup;

  constructor(
    private menuCtrl: MenuController,
    public alertService: AlertService,
    private formBuilder: FormBuilder,
    public service: ApiService,
  ) {
    this.Presupuesto = new PresupuestosModel;
    this.buscando = false;

    this.menuCtrl.enable(true);
    this.ready = false;
    this.myForm = formBuilder.group({
      Serie: ['', Validators.compose([Validators.nullValidator])],
      Presupuesto: ['', Validators.compose([Validators.nullValidator])],
    });
  }

  ngOnInit() {
    this.init();
  }

  private async init() {

    await this.alertService.showLoading('Cargando...');

    // var me = this;
    // window["callbackSubirFichero"] = () => {
    //   this.enviarFichero.call(me);
    // }

    this.ready = true

    await this.alertService.hideLoading();

  }

  async buscarPresupuesto() {

    try {

      await this.alertService.showLoading('Buscando...');

      const res = await this.service.Presupuesto.getDatosPresupuesto(this.Presupuesto.Serie, this.Presupuesto.Presupuesto);

      if (res.length > 0) {

        const nuestroCliente = (await this.service.Presupuesto.getClienteDatosFiscales(res[0].NuestroCliente))[0];

        this.Presupuesto = res[0];
        this.Presupuesto.nuestroClienteRazonSocial = nuestroCliente.RazonSocial;

        //Llamamos a obtener los ficheros de las tres carpetas ya que el get de estas las creará si no existen
        await this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, "Instalaciones");
        await this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, "Conformes");
        await this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, "Medidas");

        //Seteamos la busqueda
        this.buscando = true;

      } else {

        throw { Message: "No se ha encontrado ningún elemento." }

      }

    } catch (ex) {
      await this.alertService.showToastError(ex.Message);
    }

    await this.alertService.hideLoading();

  }

  cancelarBusquedaPresupuesto() {

    this.Presupuesto.Serie = "";
    this.Presupuesto.Presupuesto = "";

    this.buscando = false;

  }

  async loadArchivos(carpetaSel: string) {

    try {

      await this.alertService.showLoading('Cargando ficheros...');

      this.carpetaFicheros = carpetaSel;

      this.Presupuesto.archivos = await this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, carpetaSel);

    } catch (ex) {
      await this.alertService.showToastError(ex.Message);
    }

    await this.alertService.hideLoading();

  }

}
