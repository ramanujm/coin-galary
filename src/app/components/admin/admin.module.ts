import { CustomMaterialModule } from './../../core/custom-material-module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
