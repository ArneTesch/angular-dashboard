import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='grid-wrapper'>
    <app-topbar></app-topbar>
    <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>
  </div>
    `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }
}
