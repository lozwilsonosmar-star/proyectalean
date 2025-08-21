// src/app/features/auth/auth.routes.ts
import { Route, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { loginComponent } from './login/loginComponent';

export const USUARIOPASSWORD: Route[] = [
     {
    path: '', component: loginComponent
     }
  
];