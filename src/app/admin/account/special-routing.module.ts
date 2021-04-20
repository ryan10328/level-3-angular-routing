import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpecialComponent} from './special/special.component';
import {HelloComponent} from './hello/hello.component';

const routes: Routes = [
  {
    path: 'special',
    component: SpecialComponent
  },
  {
    path: 'hello/:id',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule {
}
