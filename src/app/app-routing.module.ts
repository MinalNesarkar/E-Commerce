import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    component:ContactUsComponent,
    path:'contactUs'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegistrationComponent,
    path:'registration'
  },
  {
    component:ProductsComponent,
    path:'products'
  },
  {
   component:WelcomeComponent,
   path:'home'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
