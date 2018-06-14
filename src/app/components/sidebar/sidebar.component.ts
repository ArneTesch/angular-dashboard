import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar" [class.sidebar-mobile]="sidebarVisible">
      <div class='m-toggle-sidebar' (click)='mToggleSidebar()'>
        <i class="material-icons pointer">
          menu
        </i>
      </div>
      <div class="brand">
        <span class='brand-name no-events' href="#!">Brand name</span>
      </div>
      <ul class='sidebar-nav'>
        <li class="sidebar-nav__item">
          <a routerLink='/items' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" title='Items'>
            <i class="material-icons custom-icon-database"></i>
            <span>{{ 'TITLE.ITEMS' | translate }}</span>
          </a>
        </li>
        <!--<li class="sidebar-nav__item">-->
          <!--<a routerLink='/items' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" title='Stores'>-->
            <!--<span>Page 2</span>-->
          <!--</a>-->
        <!--</li>-->
      </ul>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarVisible = false;

  constructor() {}

  ngOnInit() {}

  mToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
