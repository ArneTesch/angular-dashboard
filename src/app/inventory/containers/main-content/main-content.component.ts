import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
