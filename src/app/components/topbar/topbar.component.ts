import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="topbar">
      <h1>Store Brand</h1>
      <div class='settings'>
        <i class="material-icons">
          settings
        </i>
      </div>
    </div>
  `,
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
