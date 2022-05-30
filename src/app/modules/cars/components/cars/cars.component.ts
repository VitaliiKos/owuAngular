import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarsService} from "../../services";
import {RegEx} from "../../../../constants";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carsService: CarsService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(value => this.cars = value)
  }

  setCar(): void {
    if (!this.carForUpdate) {
      this.carsService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    } else {
      this.carsService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(value => value.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null
      })
    }
    this.form.reset()
  }

  delete(id: number): void {
    this.carsService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl('model', [Validators.pattern(RegEx.model)]),
      year: new FormControl('1990', [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl('1000', [Validators.min(1000), Validators.max(1000000)])
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
