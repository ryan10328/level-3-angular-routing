import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { SpecialComponent } from './special/special.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    SpecialComponent,
    HelloComponent
  ],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ]
})
export class SpecialModule { }
