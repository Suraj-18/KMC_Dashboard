import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AuthComponent ,
  children: [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: SignInComponent },
    { path: 'register', component: SignUpComponent },
  ]}
];

@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AuthModule { }
