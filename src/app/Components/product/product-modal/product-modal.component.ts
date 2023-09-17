import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../product.model';



@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    quantity: 0,
    unit_cost: 0
  }

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
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
