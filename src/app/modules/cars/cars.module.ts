import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './components/cars/cars.component';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarsModule {
}
