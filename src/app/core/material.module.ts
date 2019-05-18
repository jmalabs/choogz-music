import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatSidenav,
  MatListModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule {}
