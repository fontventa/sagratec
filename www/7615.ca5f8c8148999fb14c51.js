(self.webpackChunksagratec=self.webpackChunksagratec||[]).push([[7615],{7615:(e,o,t)=>{"use strict";t.r(o),t.d(o,{PresupuestosPageModule:()=>x});var n=t(8583),i=t(665),s=t(7823),r=t(1348),u=t(4762);class c{}var a=t(8720),g=t(7300),p=t(8166);function l(e,o){if(1&e){const e=a.EpF();a.TgZ(0,"ion-button",10),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).buscarPresupuesto()}),a._uU(1,"Buscar"),a.qZA()}if(2&e){const e=a.oxw(2);a.Q6J("disabled",!(null!=e.Presupuesto.Presupuesto&&null!=e.Presupuesto.Presupuesto&&""!=e.Presupuesto.Presupuesto))}}function d(e,o){if(1&e){const e=a.EpF();a.TgZ(0,"ion-button",11),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).cancelarBusquedaPresupuesto()}),a._uU(1,"Cancelar busqueda"),a.qZA()}}function h(e,o){if(1&e&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-label"),a._uU(2),a.qZA(),a.qZA()),2&e){const e=o.$implicit;a.xp6(2),a.Oqu(e.Nombre)}}function P(e,o){if(1&e){const e=a.EpF();a.TgZ(0,"ion-list"),a.TgZ(1,"ion-title"),a._uU(2,"Clientes"),a.qZA(),a.TgZ(3,"ion-item"),a.TgZ(4,"ion-label"),a._uU(5),a.qZA(),a.qZA(),a.TgZ(6,"ion-item"),a.TgZ(7,"ion-label"),a._uU(8),a.qZA(),a.qZA(),a.TgZ(9,"ion-item"),a.TgZ(10,"ion-label"),a._uU(11),a.qZA(),a.qZA(),a.TgZ(12,"ion-item"),a.TgZ(13,"ion-label"),a._uU(14),a.qZA(),a.qZA(),a.TgZ(15,"ion-title"),a._uU(16,"Documentos"),a.qZA(),a.TgZ(17,"ion-item"),a.TgZ(18,"ion-label"),a._uU(19,"Selecciona el tipo de fichero a subir"),a.qZA(),a.qZA(),a.TgZ(20,"ion-button",11),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).loadArchivos("Instalaciones")}),a._uU(21,"Instalaciones"),a.qZA(),a.TgZ(22,"ion-button",11),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).loadArchivos("Conformes")}),a._uU(23,"OTT"),a.qZA(),a.TgZ(24,"ion-button",11),a.NdJ("click",function(){return a.CHM(e),a.oxw(2).loadArchivos("Medidas")}),a._uU(25,"Hoja de medidas"),a.qZA(),a.YNc(26,h,3,1,"ion-item",12),a.qZA()}if(2&e){const e=a.oxw(2);a.xp6(5),a.AsE("Nuestro cliente: ",e.Presupuesto.NuestroCliente," - ",e.Presupuesto.nuestroClienteRazonSocial,""),a.xp6(3),a.hij("Su presupuesto: ",e.Presupuesto.SuPresupuesto,""),a.xp6(3),a.hij("Su cliente: ",e.Presupuesto.SuCliente,""),a.xp6(3),a.hij("Nombre cliente: ",e.Presupuesto.NombreCliente,""),a.xp6(12),a.Q6J("ngForOf",e.Presupuesto.archivos)}}function f(e,o){if(1&e){const e=a.EpF();a.TgZ(0,"div",2),a.TgZ(1,"div",3),a.TgZ(2,"form",4),a.TgZ(3,"ion-item"),a.TgZ(4,"ion-label"),a._uU(5,"Numero de serie"),a.qZA(),a.TgZ(6,"ion-input",5),a.NdJ("ngModelChange",function(o){return a.CHM(e),a.oxw().Presupuesto.Serie=o}),a.qZA(),a.qZA(),a.TgZ(7,"ion-item"),a.TgZ(8,"ion-label"),a._uU(9,"Presupuesto"),a.qZA(),a.TgZ(10,"ion-input",6),a.NdJ("ngModelChange",function(o){return a.CHM(e),a.oxw().Presupuesto.Presupuesto=o}),a.qZA(),a.qZA(),a.YNc(11,l,2,1,"ion-button",7),a.YNc(12,d,2,0,"ion-button",8),a.YNc(13,P,27,6,"ion-list",9),a.qZA(),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.xp6(2),a.Q6J("formGroup",e.myForm),a.xp6(4),a.Q6J("ngModel",e.Presupuesto.Serie)("disabled",e.buscando),a.xp6(4),a.Q6J("ngModel",e.Presupuesto.Presupuesto)("disabled",e.buscando),a.xp6(1),a.Q6J("ngIf",!e.buscando),a.xp6(1),a.Q6J("ngIf",e.buscando),a.xp6(1),a.Q6J("ngIf",e.buscando)}}const C=[{path:"",component:(()=>{class e{constructor(e,o,t,n){this.menuCtrl=e,this.alertService=o,this.formBuilder=t,this.service=n,this.Presupuesto=new c,this.buscando=!1,this.menuCtrl.enable(!0),this.ready=!1,this.myForm=t.group({Serie:["",i.kI.compose([i.kI.nullValidator])],Presupuesto:["",i.kI.compose([i.kI.nullValidator])]})}ngOnInit(){this.init()}init(){return(0,u.mG)(this,void 0,void 0,function*(){yield this.alertService.showLoading("Cargando..."),this.ready=!0,yield this.alertService.hideLoading()})}buscarPresupuesto(){return(0,u.mG)(this,void 0,void 0,function*(){try{yield this.alertService.showLoading("Buscando...");const e=yield this.service.Presupuesto.getDatosPresupuesto(this.Presupuesto.Serie,this.Presupuesto.Presupuesto);if(!(e.length>0))throw{Message:"No se ha encontrado ning\xfan elemento."};{const o=(yield this.service.Presupuesto.getClienteDatosFiscales(e[0].NuestroCliente))[0];this.Presupuesto=e[0],this.Presupuesto.nuestroClienteRazonSocial=o.RazonSocial,yield this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie,this.Presupuesto.Presupuesto,"Instalaciones"),yield this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie,this.Presupuesto.Presupuesto,"Conformes"),yield this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie,this.Presupuesto.Presupuesto,"Medidas"),this.buscando=!0}}catch(e){yield this.alertService.showToastError(e.Message)}yield this.alertService.hideLoading()})}cancelarBusquedaPresupuesto(){this.Presupuesto.Serie="",this.Presupuesto.Presupuesto="",this.buscando=!1}loadArchivos(e){return(0,u.mG)(this,void 0,void 0,function*(){try{yield this.alertService.showLoading("Cargando ficheros..."),this.carpetaFicheros=e,this.Presupuesto.archivos=yield this.service.Presupuesto.getFicherosCarpeta(this.Presupuesto.Serie,this.Presupuesto.Presupuesto,e)}catch(o){yield this.alertService.showToastError(o.Message)}yield this.alertService.hideLoading()})}}return e.\u0275fac=function(o){return new(o||e)(a.Y36(s._q),a.Y36(g.c),a.Y36(i.qu),a.Y36(p.s))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-presupuestos"]],decls:8,vars:1,consts:[["slot","start",1,"botondeAtras"],["class","body",4,"ngIf"],[1,"body"],[1,"paddingGenerico"],[3,"formGroup"],["formControlName","Serie",3,"ngModel","disabled","ngModelChange"],["formControlName","Presupuesto",3,"ngModel","disabled","ngModelChange"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[4,"ngIf"],[3,"disabled","click"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5," Presupuestos "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.YNc(7,f,14,8,"div",1),a.qZA()),2&e&&(a.xp6(7),a.Q6J("ngIf",o.ready))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,s.W2,n.O5,i._Y,i.JL,i.sg,s.Ie,s.Q$,s.pK,s.j9,i.JJ,i.u,s.YG,s.q_,n.sg],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#f5f5f5}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-secondary);--border-width:0;--border-color:var(--ion-color-secondary);--color:#fff}.botonLogout[_ngcontent-%COMP%]{background:#0000;font-size:28px;color:#fff;position:absolute;right:25px;top:25px;z-index:99}.grupodeFichas[_ngcontent-%COMP%]{display:block;margin:0;z-index:2;position:relative}.grupodeFichas[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%], .grupodeFichas[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:15px;background-color:#fff;box-shadow:0 3px 6px #0000000f;padding:20px;border-radius:15px;cursor:pointer}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]{display:flex}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:30px;margin-right:14px;margin-top:4px}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--ion-color-secondary);font-family:var(--ion-font-secondary);font-size:20px;margin:0}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#585858;font-family:var(--ion-font-secondary);margin:8px 0 0}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000;font-size:21px;border:2px solid var(--ion-color-primary);border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;color:var(--ion-color-primary);margin-left:10px}.rueca3d[_ngcontent-%COMP%]{position:absolute;left:-20px;bottom:10px;z-index:1}.rueca3d[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:88px}.rayaFina[_ngcontent-%COMP%]{right:58px;bottom:-92px;height:203px}.rayaFina[_ngcontent-%COMP%], .rayaNaranja[_ngcontent-%COMP%]{position:absolute;z-index:1}.rayaNaranja[_ngcontent-%COMP%]{right:84px;bottom:-17px;height:69px}@media (max-width: 575.98px){.grupodeFichas[_ngcontent-%COMP%]{margin:0 auto}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:12px}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1px 0 0}.grupodeFichas[_ngcontent-%COMP%]   .ficha[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:9px 0 0}.rayaFina[_ngcontent-%COMP%]{right:-39px;bottom:-92px}.rayaNaranja[_ngcontent-%COMP%]{right:16px;bottom:-17px}.rueca3d[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:68px}}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.Bz.forChild(C)],r.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,i.u5,i.UX,s.Pc,m]]}),e})()}}]);