import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() { }

  sideNavItemClicked() {
    this.sideNavToggle.emit();
  }
}
