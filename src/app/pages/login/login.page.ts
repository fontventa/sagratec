import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController, Platform } from '@ionic/angular';
import LoginResult from '../../../models/login/loginResult.model';
import { LoginService } from '../../api/login/login.service';
import { UtilService } from '../../services/util.service';
import { AlertService } from '../../services/alert.service';
import { ApiService } from '../../api/api.service';
import { ConfigService } from '../../services/config.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { NavParamsService } from '../../services/nav-params.service';
import { GlobalService } from '../../services/global.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ready: boolean;
  formLogin: FormGroup;
  codigo: string;
  user: string
  password: string

  public globalVar: any;

  constructor(
    private nav: NavController,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private navCtrl: NavController,
    private navParams: NavParamsService,
    private menuCtrl: MenuController
  ) {

    this.menuCtrl.enable(false);

    this.api.loginToken = localStorage.getItem('token');

    this.formLogin = formBuilder.group({
      codigo: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    this.ready = true;

  }

  ngOnInit() {

    this.globalVar = GlobalService;
    this.doAutoLogin();

  }

  async doLogin() {

    try {
      if (this.password && this.password.toString().trim().length > 0 && this.user && this.user.toString().trim().length > 0 &&
        this.codigo && this.codigo.toString().trim().length > 0) {

        await this.alertService.showLoading('Iniciando sesión...');

        const loginRes = await this.api.Login.login(this.codigo, this.user, this.password);

        if (loginRes && loginRes.Token) {

          this.api.Login.setLogin(loginRes, this.codigo, this.user, this.password);

          await this.alertService.hideLoading();

          await AppComponent.instance.executeMenu();
          this.navCtrl.navigateRoot('presupuestos');

        } else {
          localStorage.setItem('token', '');
          GlobalService.hideSplash = true;
          // this.splashScreen.hide();
          this.alertService.showToastError('Usuario o contraseña incorrectos.');
        }
      }
    } catch (ex) {
      this.alertService.showToastError("Usuario o contraseña incorrectos");
      GlobalService.hideSplash = true;

      await this.alertService.hideLoading();
    }

  }

  async doAutoLogin() {

    try {

      const token = localStorage.getItem('token');
      this.api.loginToken = token;

      const ogidoccetargas = localStorage.getItem('ogidoccetargas');
      const emanresucetargas = localStorage.getItem('emanresucetargas');

      this.codigo = ogidoccetargas;
      this.user = emanresucetargas;

      if (token != null && token != undefined && token != "" &&
        ogidoccetargas != null && ogidoccetargas != undefined && ogidoccetargas != "" &&
        emanresucetargas != null && emanresucetargas != undefined && emanresucetargas != "") {

        await this.alertService.showLoading('Iniciando sesión...');

        await this.alertService.hideLoading();

        await AppComponent.instance.executeMenu();
        this.navCtrl.navigateRoot('presupuestos');

      }

    } catch (ex) {
      console.log(ex)
      //this.alertService.showToastError(ex.message);
      GlobalService.hideSplash = true;

      this.api.Login.logOut();
      this.navParams.clear(true);

    }

  }

}
