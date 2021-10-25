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

  @ViewChild('password') passwordInput;
  ready: boolean;
  formLogin: FormGroup;
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
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    this.ready = true;

  }

  ngOnInit() {

    this.globalVar = GlobalService;
    //this.doAutoLogin();

  }

  async doLogin() {

    try {
      if (this.password && this.password.toString().trim().length > 0 && this.user && this.user.toString().trim().length > 0) {
        //if (UtilService.isValidEmail(this.user) || this.user == "Administrador") {

        await this.alertService.showLoading('Iniciando sesión...');

        const user = await this.api.Login.login(this.user, this.password);

        if (user && user.Token) {

          await this.api.Login.setLogin(user)

          //await AppComponent.instance.executeMenu()

          this.alertService.hideLoading();
          this.navCtrl.navigateRoot('maquinas-list');

        } else {
          localStorage.setItem('token', '');
          GlobalService.hideSplash = true;
          // this.splashScreen.hide();
          this.alertService.showToastError('Usuario o contraseña incorrectos.');
        }
        // } else {
        //   GlobalService.hideSplash = true;
        //   // this.splashScreen.hide();
        //   this.alertService.showToastError('Debes especificar un email válido');
        // }
      }
    } catch (ex) {
      this.alertService.showToastError(ex.message);
      GlobalService.hideSplash = true;
      // this.splashScreen.hide();
    } finally {
      await this.alertService.hideLoading();
    }
  }

  // async doAutoLogin() {

  //   try {

  //     this.api.loginToken = localStorage.getItem('token');

  //     if (this.api.loginToken != null && this.api.loginToken != undefined && this.api.loginToken != "") {

  //       await this.alertService.showLoading('Cargando...');
  //       const user = await this.api.Login.loginWithToken(this.api.loginToken);

  //       if (user && user.Token) {
  //         await this.api.Login.setLogin(user)

  //         await AppComponent.instance.executeMenu()

  //         this.alertService.hideLoading();
  //         this.navCtrl.navigateRoot('maquinas-list');

  //       } else {
  //         localStorage.setItem('token', '');
  //         GlobalService.hideSplash = true;
  //         // this.splashScreen.hide();
  //         this.alertService.showToastError('Usuario o contraseña incorrectos.');
  //       }

  //     }

  //   } catch (ex) {
  //     //this.alertService.showToastError(ex.message);
  //     GlobalService.hideSplash = true;
  //     this.api.loginToken = "";
  //     localStorage.setItem('token', '');
  //   } finally {
  //     await this.alertService.hideLoading();
  //   }

  // }

  eventHandler(keyCode, control) {
    if (keyCode == 13) {
      switch (control) {
        case 'email':
          this.passwordInput.setFocus();
          break;
        case 'password':
          this.doLogin();
          break;
      }
    }
  }

  async registro() {
    await this.navCtrl.navigateForward('register');
  }

  async provocarError() {
    //throw new Error('Prueba Error Sentry')
  }

}
