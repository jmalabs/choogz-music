import { SharedModule } from './../../shared/shared.module';
import { SearchComponent } from './components/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
