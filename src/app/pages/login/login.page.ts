import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuController, NavController, Platform } from '@ionic/angular';
import LoginResult from '../../../models/login/loginResult.model';
import { LoginService } from '../../api/login/login.service';
import { UtilService } from '../../services/util.service';
import { AlertService } from '../../services/alert.service';
import { ApiService } from '../../api/api.service';
import { ConfigService } from '../../services/config.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //#region Propiedades

  @ViewChild('password') passwordInput
  dataLoaded: boolean;
  login: LoginResult;
  autoLogin: string;
  formLogin: FormGroup;
  version: string;
  esMobile: boolean;
  language: string

  //#endregion

  //#region Init

  constructor(
    public menuCtrl: MenuController,
    public platform: Platform,
    public loginService: LoginService,
    public utils: UtilService,
    public alertService: AlertService,
    public formBuilder: FormBuilder,
    public service: ApiService,
    public navCtrl: NavController,
    public config: ConfigService,
    public splashScreen: SplashScreen
  ) { 
    
    this.formBuilder = formBuilder
    this.menuCtrl.enable(false)

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.dataLoaded = true
  }

  //#endregion

}
