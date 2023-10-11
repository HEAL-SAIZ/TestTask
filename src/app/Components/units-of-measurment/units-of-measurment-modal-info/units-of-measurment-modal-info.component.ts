import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUnitsOfMeasurement } from '../../../Models/UnitsOfMeasurement.modal';

@Component({
  selector: 'app-units-of-measurment-modal-info',
  templateUrl: './units-of-measurment-modal-info.component.html'
})
export class UnitsOfMeasurmentModalInfoComponent implements OnInit {


  units_of_measurements: IUnitsOfMeasurement = {
    id: 0,
    value: ''
  }

  constructor(
    public dialogRef: MatDialogRef<UnitsOfMeasurmentModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUnitsOfMeasurement
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.units_of_measurements = { ...this.data };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
