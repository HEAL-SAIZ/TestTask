import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-modal-info',
  templateUrl: './product-modal-info.component.html'
})
export class ProductModalInfoComponent implements OnInit {


  product: IProduct = {
    id: 0,
    name: '',
    quantity: 0,
    unit_cost: 0,
    units_of_measurement: { id: 0, value: '' }

  }

  constructor(
    public dialogRef: MatDialogRef<ProductModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.product = { ...this.data };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
