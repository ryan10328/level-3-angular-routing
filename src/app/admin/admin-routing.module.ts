import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {PermissionComponent} from './permission/permission.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
        loadChildren: () => import('./account/special.module').then(g => g.SpecialModule)
      },
      {
        path: 'permission',
        component: PermissionComponent
      },
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
