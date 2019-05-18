import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [MaterialModule, FormsModule, FlexLayoutModule],
  exports: [MaterialModule, FormsModule, FlexLayoutModule]
})
export class CoreModule {}
