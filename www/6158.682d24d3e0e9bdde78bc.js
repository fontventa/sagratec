(self.webpackChunksagratec=self.webpackChunksagratec||[]).push([[6158],{6158:(o,n,t)=>{"use strict";t.r(n),t.d(n,{LoginPageModule:()=>x});var e=t(8583),i=t(665),r=t(7823),g=t(1348),a=t(4762),c=t(7465),s=t(4879),l=t(8720),d=t(7300),p=t(8166),u=t(5937);function h(o,n){if(1&o&&(l.TgZ(0,"p"),l._uU(1),l.qZA()),2&o){const o=l.oxw();l.xp6(1),l.hij("v",o.globalVar.version," | Powered by Fontventa")}}const f=[{path:"",component:(()=>{class o{constructor(o,n,t,e,r,g,a){this.nav=o,this.alertService=n,this.formBuilder=t,this.api=e,this.navCtrl=r,this.navParams=g,this.menuCtrl=a,this.menuCtrl.enable(!1),this.api.loginToken=localStorage.getItem("token"),this.formLogin=t.group({codigo:["",i.kI.compose([i.kI.required])],user:["",i.kI.compose([i.kI.required])],password:["",i.kI.compose([i.kI.required])]}),this.ready=!0}ngOnInit(){this.globalVar=c.U,this.doAutoLogin()}doLogin(){return(0,a.mG)(this,void 0,void 0,function*(){try{if(this.password&&this.password.toString().trim().length>0&&this.user&&this.user.toString().trim().length>0&&this.codigo&&this.codigo.toString().trim().length>0){yield this.alertService.showLoading("Iniciando sesi\xf3n...");const o=yield this.api.Login.login(this.codigo,this.user,this.password);o&&o.Token?(this.api.Login.setLogin(o,this.codigo,this.user,this.password),this.alertService.hideLoading(),yield s.y.instance.executeMenu(),this.navCtrl.navigateRoot("presupuestos")):(localStorage.setItem("token",""),c.U.hideSplash=!0,this.alertService.showToastError("Usuario o contrase\xf1a incorrectos."))}}catch(o){this.alertService.showToastError("Usuario o contrase\xf1a incorrectos"),c.U.hideSplash=!0,yield this.alertService.hideLoading()}})}doAutoLogin(){return(0,a.mG)(this,void 0,void 0,function*(){try{const o=localStorage.getItem("token");this.api.loginToken=o;const n=localStorage.getItem("ogidoccetargas"),t=localStorage.getItem("emanresucetargas"),e=localStorage.getItem("drowssapcetargas");if(null!=o&&null!=o&&""!=o&&null!=n&&null!=n&&""!=n&&null!=t&&null!=t&&""!=t&&null!=e&&null!=e&&""!=e){yield this.alertService.showLoading("Iniciando sesi\xf3n...");const o=yield this.api.Login.login(n,t,e);if(!o||!o.Token)throw"Error en el login";this.api.Login.setLogin(o,n,t,e),this.alertService.hideLoading(),yield s.y.instance.executeMenu(),this.navCtrl.navigateRoot("presupuestos")}}catch(o){console.log(o),c.U.hideSplash=!0,this.api.Login.logOut(),this.navParams.clear(!0),yield this.alertService.hideLoading()}})}}return o.\u0275fac=function(n){return new(n||o)(l.Y36(r.SH),l.Y36(d.c),l.Y36(i.qu),l.Y36(p.s),l.Y36(r.SH),l.Y36(u.l),l.Y36(r._q))},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:5,consts:[[1,"ruecaFlotante"],[1,"boxLogin"],[1,"boxLogin-body"],[1,"figureApp"],["src","assets/images/figure-software.svg","alt",""],[1,"boxLogin-logo"],["src","assets/images/logoWhite.svg","alt","logo"],[1,"titleForm"],[3,"formGroup"],[1,"boxLogin-form"],[1,"boxLogin-form-item"],[1,"fal","fa-cog"],["clear-input","","placeholder","Codigo","formControlName","codigo","name","codigo",3,"ngModel","ngModelChange"],[1,"fal","fa-user-circle"],["clear-input","","placeholder","Usuario","formControlName","user","name","user",3,"ngModel","ngModelChange"],[1,"fal","fa-unlock"],["clear-input","","placeholder","Contrase\xf1a","formControlName","password","name","password","id","password",2,"-webkit-text-security","disc",3,"ngModel","ngModelChange"],[1,"mt30"],[1,"boton","degradado","large","w100",3,"click"],[1,"boxLogin-footer"],[4,"ngIf"]],template:function(o,n){1&o&&(l.TgZ(0,"ion-content"),l._UZ(1,"div",0),l.TgZ(2,"div",1),l.TgZ(3,"div",2),l.TgZ(4,"div",3),l._UZ(5,"img",4),l.qZA(),l.TgZ(6,"div",5),l._UZ(7,"img",6),l.qZA(),l.TgZ(8,"div"),l.TgZ(9,"div",7),l.TgZ(10,"h2"),l._uU(11,"Inicio de sesi\xf3n"),l.qZA(),l.qZA(),l.TgZ(12,"form",8),l.TgZ(13,"div",9),l.TgZ(14,"div",10),l._UZ(15,"i",11),l.TgZ(16,"ion-input",12),l.NdJ("ngModelChange",function(o){return n.codigo=o}),l.qZA(),l.qZA(),l.TgZ(17,"div",10),l._UZ(18,"i",13),l.TgZ(19,"ion-input",14),l.NdJ("ngModelChange",function(o){return n.user=o}),l.qZA(),l.qZA(),l.TgZ(20,"div",10),l._UZ(21,"i",15),l.TgZ(22,"ion-input",16),l.NdJ("ngModelChange",function(o){return n.password=o}),l.qZA(),l.qZA(),l.TgZ(23,"div",17),l.TgZ(24,"button",18),l.NdJ("click",function(){return n.doLogin()}),l._uU(25," Entrar "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(26,"div",19),l.YNc(27,h,2,1,"p",20),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&o&&(l.xp6(12),l.Q6J("formGroup",n.formLogin),l.xp6(4),l.Q6J("ngModel",n.codigo),l.xp6(3),l.Q6J("ngModel",n.user),l.xp6(3),l.Q6J("ngModel",n.password),l.xp6(5),l.Q6J("ngIf",null!=n.globalVar&&null!=n.globalVar))},directives:[r.W2,i._Y,i.JL,i.sg,r.pK,r.j9,i.JJ,i.u,e.O5],styles:['.ruecaFlotante[_ngcontent-%COMP%]{position:fixed;top:-66px;right:-120px;z-index:99}.ruecaFlotante[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:270px}.boxLogin[_ngcontent-%COMP%]{position:relative;height:100%;background-size:cover;background-position:100% 100%}.boxLogin[_ngcontent-%COMP%]:after{content:"";width:1049px;height:834px;z-index:1;opacity:.5;bottom:-51px;position:fixed;left:-79px}.boxLogin[_ngcontent-%COMP%]:before{content:"";width:100%;height:100%;background-image:linear-gradient(180deg,#020024,#c970cb 0,#904e91);position:absolute;opacity:1;z-index:1}.boxLogin-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:50px;width:100%;height:100%;position:relative;z-index:9}.boxLogin-body.centradoVerticalmente[_ngcontent-%COMP%]{justify-content:center}.boxLogin-footer[_ngcontent-%COMP%]{padding:20px 0 0;text-align:center;color:#fff}.boxLogin-footer[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;font-size:14px;display:inline-block}.boxLogin-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:13px}.boxLogin-logo[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.boxLogin-logo[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.boxLogin-form[_ngcontent-%COMP%]{background-color:#fff;padding:50px;border-radius:15px;position:relative;z-index:2}.figureApp[_ngcontent-%COMP%]{position:absolute;top:0;left:-36px}@media (min-width: 768px){.boxLogin-form[_ngcontent-%COMP%]{max-width:402px}}@media (max-width: 767px){.boxLogin-form[_ngcontent-%COMP%]{width:100%}}.boxLogin-form-item[_ngcontent-%COMP%]{padding-left:75px;position:relative;border-bottom:2px solid #d9d9d9;padding-top:22px;padding-bottom:22px}.boxLogin-form-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;position:absolute;left:12px;top:50%;margin-top:-14px;color:#c970cb}.boxLogin-form-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;color:#111}ion-input[_ngcontent-%COMP%]{--placeholder-color:#000;--placeholder-opacity:0.7}.titleForm[_ngcontent-%COMP%]{margin-bottom:30px}.titleForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;text-align:center;font-family:var(--ion-font-secondary);font-size:40px;font-weight:600}.boxIdiomas[_ngcontent-%COMP%]{display:flex;justify-content:center}.boxIdiomas[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 10px;color:#ccc}.boxIdiomas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:19px;color:#111;font-weight:400;background-color:initial}.boxIdiomas[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-primary);background:#0000}@media (max-width: 575.98px){.boxLogin-form[_ngcontent-%COMP%]{padding:30px}.titleForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.boxLogin-body[_ngcontent-%COMP%]{padding:40px}.ruecaFlotante[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:207px}.boton[_ngcontent-%COMP%]{font-size:21px}.boxIdiomas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:15px}.boxLogin-form-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}}ion-content[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-primary)}']}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[g.Bz.forChild(f)],g.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[e.ez,i.u5,i.UX,r.Pc,m]]}),o})()}}]);