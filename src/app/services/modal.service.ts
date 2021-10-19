import { Injectable } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular'
import { ModalComponent } from '../components/modal/modal.component'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modals: any[] 

  constructor(
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController
  ) { }

  async showModal(page: any, enableBackdropDismiss: boolean, params?: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {

      const modal = await this.modalCtrl.create({
        component: page,
        componentProps: { params },
        backdropDismiss: enableBackdropDismiss
      });

      await modal.present();

      modal.onDidDismiss()
        .then((data) => {
          if (data.data !== undefined) {
            resolve(data.data);
          }
        });
    });
  }

  async showModalFullscreen(page: any, enableBackdropDismiss: boolean, params?: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {

      const modal = await this.modalCtrl.create({
        component: page,
        componentProps: { params },
        backdropDismiss: enableBackdropDismiss,
        cssClass: 'modal-fullscreen'
      });

      await modal.present();

      modal.onDidDismiss()
        .then((data) => {
          if (data.data !== undefined) {
            resolve(data.data);
          }
        });
    });
  }

  async showModalMini(page: any, enableBackdropDismiss: boolean, params?: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {

      const modal = await this.modalCtrl.create({
        component: page,
        componentProps: { params },
        backdropDismiss: enableBackdropDismiss,
        cssClass: 'modal-mini'
      });

      await modal.present();

      modal.onDidDismiss()
        .then((data) => {
          if (data.data !== undefined) {
            resolve(data.data);
          }
        });
    });
  }

  async showModalBottom(page: any, enableBackdropDismiss: boolean, params?: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {

        const modal = await this.modalCtrl.create({
            component: ModalComponent,
            presentingElement: page,
            componentProps: {
              rootPage: page
            },
            backdropDismiss: enableBackdropDismiss,
            cssClass: 'modal-bottom'
        });

        await modal.present();

        modal.onDidDismiss()
            .then((data) => {
                if (data.data !== undefined) {
                    resolve(data.data);
                }
            });
    });
  }
 
}
