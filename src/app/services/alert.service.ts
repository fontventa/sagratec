import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular'
import { ConfigService } from './config.service'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  //#region Propiedades

  nombreAplicacion: string;
  public globalSearching: number[];
  public globalSearchingText: string;

  //#endregion

  //#region Init

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public configService: ConfigService
  ) {
    this.init();
  }

  private async init() {
    this.nombreAplicacion = this.configService.getNombreAplicacion();
    this.globalSearching = [];
    this.globalSearchingText = 'Cargando...';
  }

  //#endregion

  //#region Alert

  showMessage(msg: string, title?: string, textoOk?: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Ok';
      if (textoOk != undefined && textoOk != null && textoOk.length > 0) {
        strOK = textoOk;
      }
      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        buttons: [{
          text: strOK,
          role: 'cancel',
          cssClass: 'buttonOK',
          handler: () => {
            setTimeout(() => {
              resolve('cancel');
            }, 0);
          }
        }]
      }).then(alerta => {
        alerta.present();
      });
    });
  }

  showConfirm(msg: string, title?: string, textoOK?: string, textoCancel?: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Sí';
      if (textoOK != undefined && textoOK != null && textoOK.length > 0) {
        strOK = textoOK;
      }
      let strCancel = 'No';
      if (textoCancel != undefined && textoCancel != null && textoCancel.length > 0) {
        strCancel = textoCancel;
      }
      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        buttons: [
          {
            text: strCancel,
            role: 'cancel',
            handler: () => {
              setTimeout(() => {
                resolve(false);
              }, 0);
            }
          },
          {
            text: strOK,
            cssClass: 'buttonOK',
            handler: () => {
              setTimeout(() => {
                resolve(true);
              }, 0);
            }
          }
        ]
      }).then(alerta => {
        alerta.present();
      });
    });
  }

  showConfirmDelete(msg: string, title?: string, textoOK?: string, textoCancel?: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Sí';
      if (textoOK != undefined && textoOK != null && textoOK.length > 0) {
        strOK = textoOK;
      }
      let strCancel = 'No';
      if (textoCancel != undefined && textoCancel != null && textoCancel.length > 0) {
        strCancel = textoCancel;
      }
      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        buttons: [
          {
            text: strCancel,
            role: 'cancel',
            handler: () => {
              setTimeout(() => {
                resolve(false);
              }, 0);
            }
          },
          {
            text: strOK,
            cssClass: 'buttonOK-delete',
            handler: () => {
              setTimeout(() => {
                resolve(true);
              }, 0);
            }
          }
        ]
      }).then(alerta => {
        alerta.present();
      });
    });
  }

  showPromptInput1(msg: string, title?: string,
                   textoOK?: string, textoCancel?: string,
                   inputPlaceholder?: string, valueInput?: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Sí';
      if (textoOK != undefined && textoOK != null && textoOK.length > 0) {
        strOK = textoOK;
      }
      let strCancel = 'No';
      if (textoCancel != undefined && textoCancel != null && textoCancel.length > 0) {
        strCancel = textoCancel;
      }
      let strInputPlaceholder = '';
      if (inputPlaceholder != undefined && inputPlaceholder != null && inputPlaceholder.length > 0) {
        strInputPlaceholder = inputPlaceholder;
      }
      let strValueInput = '';
      if (valueInput != undefined && valueInput != null && valueInput.length > 0) {
        strValueInput = valueInput;
      }
      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        inputs: [
          {
            name: 'input1',
            placeholder: strInputPlaceholder,
            value: strValueInput
          }
        ],
        buttons: [
          {
            text: strCancel,
            role: 'cancel',
            cssClass: 'buttonCancel',
            handler: () => {
              setTimeout(() => {
                resolve(false);
              }, 1);
            }
          },
          {
            text: strOK,
            cssClass: 'buttonOK',
            handler: data => {
              setTimeout(() => {
                resolve(data.input1);
              }, 1);
            }
          }
        ]
      }).then((alerta) => {
        alerta.present();
      });
    });
  }

  showPromptInput1Required(msg: string, title?: string,
                           textoOK?: string, textoCancel?: string,
                           inputPlaceholder?: string, valueInput?: string, textoCampo?: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Sí';
      if (textoOK != undefined && textoOK != null && textoOK.length > 0) {
        strOK = textoOK;
      }
      let strCancel = 'No';
      if (textoCancel != undefined && textoCancel != null && textoCancel.length > 0) {
        strCancel = textoCancel;
      }
      let strInputPlaceholder = '';
      if (inputPlaceholder != undefined && inputPlaceholder != null && inputPlaceholder.length > 0) {
        strInputPlaceholder = inputPlaceholder;
      }
      let strValueInput = '';
      if (valueInput != undefined && valueInput != null && valueInput.length > 0) {
        strValueInput = valueInput;
      }
      let strCampo = '';
      if (textoCampo != undefined && textoCampo != null && textoCampo.length > 0) {
        strCampo = textoCampo + ' ';
      }
      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        inputs: [
          {
            name: 'input1',
            placeholder: strInputPlaceholder,
            value: strValueInput
          }
        ],
        buttons: [
          {
            text: strCancel,
            role: 'cancel',
            cssClass: 'buttonCancel',
            handler: () => {
              setTimeout(() => {
                resolve(false);
              }, 1);
            }
          },
          {
            text: strOK,
            cssClass: 'buttonOK',
            handler: async (data) => {
              if (data.input1 != null && data.input1.toString().trim().length > 0) {
                setTimeout(() => {
                  resolve(data.input1);
                }, 1);
              } else {
                // setTimeout(() => {
                  this.showToastError(`${strCampo} es obligatorio`);
                  return false;
                // }, 1);
              }
            }
          }
        ]
      }).then((alerta) => {
        alerta.present();
      });
    });
  }

  showPromptInput2(msg: string, title?: string,
                   textoOK?: string, textoCancel?: string,
                   input1Placeholder?: string, valueInput1?: string,
                   input2Placeholder?: string, valueInput2?: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      this.hideAllLoadings();
      let myTitle: string = this.nombreAplicacion;
      if (title != undefined && title != null && title.length > 0) {
        myTitle = title;
      }
      let strOK = 'Sí';
      if (textoOK != undefined && textoOK != null && textoOK.length > 0) {
        strOK = textoOK;
      }
      let strCancel = 'No';
      if (textoCancel != undefined && textoCancel != null && textoCancel.length > 0) {
        strCancel = textoCancel;
      }
      let strInput1Placeholder = '';
      if (input1Placeholder != undefined && input1Placeholder != null && input1Placeholder.length > 0) {
        strInput1Placeholder = input1Placeholder;
      }
      let strValueInput1 = '';
      if (valueInput1 != undefined && valueInput1 != null && valueInput1.length > 0) {
        strValueInput1 = valueInput1;
      }
      let strInput2Placeholder = '';
      if (input2Placeholder != undefined && input2Placeholder != null && input2Placeholder.length > 0) {
        strInput2Placeholder = input2Placeholder;
      }
      let strValueInput2 = '';
      if (valueInput2 != undefined && valueInput2 != null && valueInput2.length > 0) {
        strValueInput2 = valueInput2;
      }

      this.alertCtrl.create({
        backdropDismiss: false,
        header: myTitle,
        message: msg,
        inputs: [
          {
            name: 'input1',
            placeholder: strInput1Placeholder,
            value: strValueInput1
          },
          {
            name: 'input2',
            placeholder: strInput2Placeholder,
            value: strValueInput2
          }
        ],
        buttons: [
          {
            text: strCancel,
            role: 'cancel',
            cssClass: 'buttonCancel',
            handler: () => {
              setTimeout(() => {
                resolve(false);
              }, 1);
            }
          },
          {
            text: strOK,
            cssClass: 'buttonOK',
            handler: data => {
              setTimeout(() => {
                resolve(data.input1);
              }, 1);
            }
          }
        ]
      }).then((alerta) => {
        alerta.present();
      });
    });
  }

  //#endregion

  //#region Loading

  showLoading(msg?: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (msg != undefined && msg != null && msg.length > 0) {
        this.globalSearchingText = msg;
      }
      this.globalSearching.push(1);
      resolve();
    });
  }

  hideLoading(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.globalSearching.length > 0) {
        this.globalSearching.pop();
      }
      resolve();
    });
  }

  hideAllLoadings(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      this.globalSearching = [];
      this.globalSearchingText = 'Cargando...';
      resolve();
    });
  }

  //#endregion

  //#region Toast

  showToast(message: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.hideAllLoadings();
      this.toastCtrl.create({
        message,
        duration: 4000,
        position: 'top',
        color: 'primary'
      }).then((toast) => {
        toast.present();
        setTimeout(() => {
          resolve(); // resolvemos cuando se oculta el toast.
        }, 4500);
      });
    });
  }

  showToastOk(message: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.hideAllLoadings();
      this.toastCtrl.create({
        message,
        duration: 4000,
        position: 'top',
        color: 'success'
      }).then((toast) => {
        toast.present();
        setTimeout(() => {
          resolve(); // resolvemos cuando se oculta el toast.
        }, 4500);
      });
    });
  }

  showToastAlert(message: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.hideAllLoadings();
      this.toastCtrl.create({
        message,
        duration: 4000,
        position: 'top',
        color: 'warning'
      }).then((toast) => {
        toast.present();
        setTimeout(() => {
          resolve(); // resolvemos cuando se oculta el toast.
        }, 4500);
      });
    });
  }

  showToastError(message: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.hideAllLoadings();
      this.toastCtrl.create({
        message,
        duration: 4000,
        position: 'top',
        color: 'danger'
      }).then((toast) => {
        toast.present();
        setTimeout(() => {
          resolve(); // resolvemos cuando se oculta el toast.
        }, 4500);
      });
    });
  }

  //#endregion

}
