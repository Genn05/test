import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PanierComponent } from './panier/panier.component';


export const routes: Routes = [
  
    {path:'profile',component:ProfileComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'product',component:ProductComponent},
    {path:'payment',component:PaymentComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'panier', component: PanierComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

