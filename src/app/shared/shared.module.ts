import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavComponent } from './navigation/menu-nav/menu-nav.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MenuNavComponent, SideNavComponent],
  imports: [MaterialModule
    , FormsModule
    , FlexLayoutModule
    , BrowserAnimationsModule
    , AppRoutingModule
    , HttpClientModule],
  exports: [MaterialModule
    , FormsModule
    , FlexLayoutModule
    , BrowserAnimationsModule
    , AppRoutingModule
    , MenuNavComponent
    , SideNavComponent
    , HttpClientModule
  ]
})
export class SharedModule { }
