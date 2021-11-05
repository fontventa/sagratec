import { Component } from '@angular/core';
import { NavController, Platform, Config, MenuController } from '@ionic/angular';
import { GlobalService } from './services/global.service';
import { SwUpdate } from '@angular/service-worker';
import { AlertService } from './services/alert.service';
import { UtilService } from './services/util.service';
import { LocationStrategy } from '@angular/common';
import { ApiService } from './api/api.service';
import { NavParamsService } from './services/nav-params.service';
import { Router } from '@angular/router';
import UserModel from '../models/login/UserModel';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public displayingExitMessage: boolean;
  public version: string;
  public selectedIndex = 0;
  public ready: boolean;
  public user: UserModel
  public pages = [];
  public static instance: AppComponent

  constructor(
    private locationStrategy: LocationStrategy,
    public api: ApiService,
    public alertService: AlertService,
    private nav: NavController,
    private config: Config,
    private navParams: NavParamsService,
    private menuCtrl: MenuController,
    private router: Router,
    public updates: SwUpdate,
    public service: ApiService,
    private platform: Platform
  ) {
    AppComponent.instance = this
    this.ready = false;
    this.api.logged = false;
    this.displayingExitMessage = false;
    // check if back or forward button is pressed.
    this.locationStrategy.onPopState(() => {
      GlobalService.backClicked = true;
    });

    this.version = GlobalService.version;

  }

  async ngOnInit() {
    await this.initializeApp();
  }

  public executeMenu() {
    this.pages = [
      {
        title: 'Presupuestos',
        url: '/presupuestos',
        icon: 'fal fa-home',
        visible: true,
        execute: () => { },
        boton: false
      },
      {
        title: 'Cerrar sesión',
        icon: 'fal fa-sign-out-alt',
        visible: this.api.logged,
        execute: () => { this.logOut(); },
        boton: true
      }
    ]

  }

  async initializeApp() {

    this.config.set('backButtonText', 'Volver')
    this.config.set('backButtonIcon', 'chevron-back-outline')

    this.nav.navigateRoot('/login');

    this.updates.available.subscribe(async event => {
      if (event.current != event.available) {
        try {
          await this.updates.activateUpdate()
          document.location.reload()
        } catch (ex) {
          console.error(ex)
          this.alertService.hideLoading();
        }

      } else {
        this.alertService.hideLoading();
      }
    })

    if (this.platform.is('cordova')) {
      await this.updates.checkForUpdate()
    }

    GlobalService.readyFired = true;
    this.ready = true;


    let goTo = UtilService.queryString("goto");
    if (goTo != null && goTo.trim().length > 0) {
      this.navParams.email = UtilService.queryString("usr")
      this.navParams.hash = UtilService.queryString("hash")
      this.nav.navigateRoot(goTo)
    } else {
      this.nav.navigateRoot('login');
    }

  }

  async logOut() {

    try {

      await this.alertService.showLoading('Cerrando sesión...');

      this.api.Login.logOut();
      this.navParams.clear(true);

      this.nav.navigateRoot("login");

    } catch (ex) {
      this.alertService.showToastError(ex.Message);
      await this.alertService.hideLoading();
    }

  }

  public goToRoot(page: string) {
    this.menuCtrl.close();
    this.nav.navigateRoot(page);
  }

}
