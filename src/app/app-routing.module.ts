import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
      path: '',
     loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
