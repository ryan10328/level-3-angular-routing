import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule} from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PermissionComponent } from './permission/permission.component';


@NgModule({
  declarations: [
    AdminComponent,
    AccountComponent,
    PermissionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
