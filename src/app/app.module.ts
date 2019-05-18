import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './modules/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SearchModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
