import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { GlobalService } from './services/global.service';
import { SwUpdate } from '@angular/service-worker';
import { AlertService } from './services/alert.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public ready: boolean;

  constructor(
    private nav: NavController,
    public updates: SwUpdate,
    public alertService: AlertService,
    private platform: Platform
  ) {
    this.ready = false;
  }

  async ngOnInit() {
    await this.initializeApp();
  }
    
  async initializeApp() {

    this.nav.navigateRoot('/login');
   
    this.updates.available.subscribe(async event => {      
      if (event.current != event.available) {
          try {
            await this.updates.activateUpdate()
            document.location.reload()
          }catch(ex) {
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

  }

}
