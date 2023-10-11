import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUnitsOfMeasurement } from '../../Models/UnitsOfMeasurement.modal';
import { UnitOfMeasurementService } from 'src/app/Services/unit-of-measurement.service';
import { UnitsOfMeasurmentModalInfoComponent } from './units-of-measurment-modal-info/units-of-measurment-modal-info.component';
import { UnitsOfMeasurmentModalComponent } from './units-of-measurment-modal/units-of-measurment-modal.component';

@Component({
  selector: 'app-units-of-measurment',
  templateUrl: './units-of-measurment.component.html'
})
export class UnitsOfMeasurmentComponent implements OnInit {
  units: IUnitsOfMeasurement[] = [];
  displayedColumns: string[] = ['id', 'value', 'actions'];


  constructor(
    private unitService: UnitOfMeasurementService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadUnitOfMeasurements();
  }

  loadUnitOfMeasurements() {
    this.unitService.getUnitsOfMeasurements().subscribe((units) => {
      this.units = units;
    });
  }


  openUnitsInfoDialog(unit?: IUnitsOfMeasurement) {
    const dialogRef = this.dialog.open(UnitsOfMeasurmentModalInfoComponent, {
      width: '550px',
      data: unit || {}, // Передача данных в модальное окно
    });
  }


  openCreateUnitsDialog(unit?: IUnitsOfMeasurement) {
    const dialogRef = this.dialog.open(UnitsOfMeasurmentModalComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Добавление 
        this.unitService.addUnitsOfMeasurement(result).subscribe(
          () => {
            this.loadUnitOfMeasurements();
          }
        );

      }
    });
  }

  openChangeUnitsDialog(units?: IUnitsOfMeasurement) {
    const dialogRef = this.dialog.open(UnitsOfMeasurmentModalComponent, {
      width: '550px',
      data: units || {}, // Передача данных в модальное окно
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Обновлнение продукта
        this.unitService.updateUnitsOfMeasurement(result).subscribe(
          () => {
            this.loadUnitOfMeasurements();
          }
        );

      }
    });
  }


  // Удаление продукта
  deleteUnits(unit: IUnitsOfMeasurement) {
    this.unitService.deleteUnitsOfMeasurement(unit.id).subscribe(() => {
      this.loadUnitOfMeasurements();
    });
  }
}
