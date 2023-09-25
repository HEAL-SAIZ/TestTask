import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../product.model';
import { UnitOfMeasurementService } from 'src/app/Services/unit-of-measurement.service';
import { IUnitsOfMeasurement } from '../UnitsOfMeasurement.modal';



@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html'
})
export class ProductModalComponent implements OnInit {

  units_of_measurements: IUnitsOfMeasurement[] = [];

  product: IProduct = {
    id: 0,
    name: '',
    quantity: 0,
    unit_cost: 0,
    units_of_measurement: { id: 0, value: '' }
  }


  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    private unitOfMeasurementService: UnitOfMeasurementService
  ) { }

  ngOnInit(): void {
    this.loadUnitOfMeasurements();
    if (this.data) {
      this.product = { ...this.data };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadUnitOfMeasurements() {
    this.unitOfMeasurementService.getUnitsOfMeasurements().subscribe((units_of_measurements) => {
      this.units_of_measurements = units_of_measurements;
    });
  }

}
