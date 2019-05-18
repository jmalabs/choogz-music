import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  appName: string;
  subAppName: string;
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() {

    this.appName = 'GIT';
    this.subAppName = 'profile viewer';
   }

  ngOnInit() { }

  menuIconClicked() {
    this.sidenavToggle.emit();
  }
}
