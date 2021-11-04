import { Component, OnInit, NgZone } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import PresupuestosModel from '../../../models/presupuestos/PresupuestosModel';
import { ApiService } from '../../api/api.service';
import PresupuestosSeriesModel from '../../../models/presupuestos/PresupuestosSeriesModel';
import { NgxPicaService } from '@digitalascetic/ngx-pica';
import heic2any from "heic2any";
import PresupuestosArchivosModel from '../../../models/presupuestos/PresupuestosArchivosModel';
import * as $ from "jquery";

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.page.html',
  styleUrls: ['./presupuestos.page.scss'],
})
export class PresupuestosPage implements OnInit {

  public Presupuesto: PresupuestosModel;
  public carpetaFicheros: string;
  public mantenerNombres: boolean;
  public series: PresupuestosSeriesModel[];

  public buscando: boolean;

  public ready: boolean;
  public myForm: FormGroup;

  constructor(
    private menuCtrl: MenuController,
    public alertService: AlertService,
    private formBuilder: FormBuilder,
    public service: ApiService,
    public zone: NgZone,
    private ngxPicaService: NgxPicaService
  ) {
    this.Presupuesto = new PresupuestosModel;
    this.carpetaFicheros = "";
    this.mantenerNombres = false;
    this.series = [];

    this.buscando = false;

    this.menuCtrl.enable(true);
    this.ready = false;
    this.myForm = formBuilder.group({
      Serie: ['', Validators.compose([Validators.nullValidator])],
      Presupuesto: ['', Validators.compose([Validators.nullValidator])],
      doc: ['', Validators.compose([Validators.nullValidator])],
      MantenerNombres: ['', Validators.compose([Validators.nullValidator])],
    });
  }

  ngOnInit() {
    this.init();
  }

  private async init() {

    await this.alertService.showLoading('Cargando...');

    //Ficheros
    var me = this;
    window["callbackSubirFichero"] = (e: any) => {
      this.enviarFichero.call(me);
    }

    //Cargamos las series
    this.series = await this.service.Presupuesto.getNumerosSerie();

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
    this.carpetaFicheros = "";
    this.mantenerNombres = false;

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

  async descargarFichero(fichero: PresupuestosArchivosModel) {

    try {

      await this.alertService.showLoading('Descargando fichero...');

      await $.ajax({
        type: "GET",
        url: this.service.URL + '/ArchivosAFS/DownloadFile/Presupuestos/' + (this.Presupuesto.Serie != undefined && this.Presupuesto.Serie != null && this.Presupuesto.Serie != "" ? this.Presupuesto.Serie : "") + this.Presupuesto.Presupuesto + "/?subdirectorios=" + this.carpetaFicheros + "&archivo=" + fichero.NombreCompleto,
        headers: {
          'sgtToken': this.service.loginToken
        },
        xhrFields: {
          responseType: 'blob'
        },
        success: function (blob) {
          var windowUrl = window.URL || window["webkitURL"];
          var url = windowUrl.createObjectURL(blob);

          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = fichero.NombreCompleto;
          link.click();
        },
        error: function (error) {
          console.log(error);
        }
      });

    } catch (ex) {
      console.log(ex)
      await this.alertService.showToastError(ex.Message);
    }

    await this.alertService.hideLoading();

  }

  async borrarFichero(fichero: PresupuestosArchivosModel) {

    try {

      await this.alertService.showLoading('Borrando fichero...');

      this.Presupuesto.archivos = await this.service.Presupuesto.deleteFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, this.carpetaFicheros, fichero.NombreCompleto);

      await this.alertService.showToast("Fichero borrado correctamente");

    } catch (ex) {
      await this.alertService.showToastError(ex.Message);
    }

    await this.alertService.hideLoading();

  }

  //#region Ficheros

  public performClick(elemId) {

    var elem = document.getElementById(elemId);

    if (elem && document.createEvent) {

      var evt = document.createEvent("MouseEvents");

      evt.initEvent("click", true, false);

      elem.dispatchEvent(evt);

    }

  }

  public enviarFichero() {

    this.zone.run(async () => {

      let input: any = document.querySelector('#inputFile');

      try {

        await this.alertService.showLoading("Subiendo ficheros...");

        const files = input["files"];
        let formData = new FormData();

        if (files.length > 0) {

          let filesResult: any[] = [];

          for (let i = 0; i < files.length; i++) {
            const item = files[i];
            filesResult.push(item);
          }

          filesResult = await this.comprimeImagenes(filesResult);

          for (let i = 0; i < filesResult.length; i++) {
            let item = filesResult[i];
            //Cambiamos el nombre del archivo
            if (!this.mantenerNombres) {
              item = new File([item], this.generarFileName(i, item.name.match(/\.[0-9a-z]+$/i)[0]));
            }

            formData.append(item.name, item);
          }

        }

        //Subimos los ficheros
        this.Presupuesto.archivos = await this.service.Presupuesto.postSubirFicherosCarpeta(this.Presupuesto.Serie, this.Presupuesto.Presupuesto, this.carpetaFicheros, formData);

        //Limpiamos el imput
        input['value'] = "";
        await this.alertService.hideLoading();

      } catch (ex) {

        this.alertService.showToastError("Ha ocurrido un error al subir los ficheros")
        input['value'] = "";

        await this.alertService.hideLoading();

      }

    });

  }

  async comprimeImagenes(files: any[]): Promise<any[]> {
    return new Promise<any[]>(async (resolve, reject) => {
      //Añadimos los ficheros que no sean imagenes directamente al result
      let result: any[] = files.filter(f => !((/\.(gif|jpe?g|tiff?|png|webp|bmp|heic|heif)$/i).test(f.name)));
      //Adaptamos las imagenes
      let filesConverted: any[] = [];
      filesConverted = await this.convertImagenes(files.filter(f => (/\.(gif|jpe?g|tiff?|png|webp|bmp|heic|heif)$/i).test(f.name)));

      if (filesConverted.length > 0) {

        this.ngxPicaService.resizeImages(filesConverted, 1200, 880).subscribe({
          next: (imageResized: File) => {
            let name = imageResized["name"];
            result.push(this.blobToFile(imageResized, name))
          },
          error: error => {
            console.log(error);
            reject("Error al comrpimir la imagen");
          },
          complete: () => {
            console.log(result)
            resolve(result);
          }
        });

      } else {

        resolve(result);

      }

    });
  }

  async convertImagenes(files: any[]): Promise<File[]> {
    return new Promise<File[]>(async (resolve, reject) => {
      let resultConverted: File[] = [];
      for (const file of files) {
        let fileConverted = await this.convertImage(file);
        if (fileConverted) {
          resultConverted.push(fileConverted);
        }
      }
      resolve(resultConverted);
    });
  }

  async convertImage(f: File): Promise<File> {
    return new Promise<File>((resolve, reject) => {

      if (!f) {
        //Handle error and exit
        resolve(null)
      }

      let blob: Blob = f;
      let file: File = f;

      //CONVERT HEIC TO JPG
      //if (/image\/hei(c|f)/.test(f.type)) {
      if (/hei(c|f)/.test(f.name.substring(f.name.lastIndexOf(".")))) {
        heic2any({
          blob,
          toType: "image/jpeg"
        }).then((jpgBlob: Blob) => {
          //Change the name of the file according to the new format
          let newName = f.name.replace(/\.[^/.]+$/, ".jpg");
          //Convert blob back to file
          file = this.blobToFile(jpgBlob, newName);
          resolve(file);
        }).catch(err => {
          resolve(null);
          //Handle error
        });
      } else {
        //This is not a HEIC image so we can just resolve
        resolve(f);
      }
    });
  }

  private blobToFile = (theBlob: Blob, fileName: string): File => {
    return new File([theBlob], fileName);
  }

  generarFileName(iteration: number, fileExtension: string): string {

    let res = "";

    const presupuestoName = this.Presupuesto.Presupuesto;
    const ahora = new Date().getTime();

    res = presupuestoName + "_" + ahora
    res += iteration;

    res += fileExtension;

    return res;
  }

  //#endregion

}
