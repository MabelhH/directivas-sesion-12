import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CondicionDirective } from '../directives/condicion.directive';



@NgModule({
  declarations: [
    HomeComponent,
    CondicionDirective

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    CondicionDirective
  ]

})
export class PagesModule { }
