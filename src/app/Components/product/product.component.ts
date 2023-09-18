import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from 'src/app/Services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductModalInfoComponent } from './product-modal-info/product-modal-info.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  displayedColumns: string[] = ['name', 'quantity', 'unit_cost', 'actions'];


  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }


  openProductInfoDialog(product?: IProduct) {
    const dialogRef = this.dialog.open(ProductModalInfoComponent, {
      width: '550px',
      data: product || {}, // Передача данных в модальное окно
    });
  }


  openProductDialog(product?: IProduct) {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '550px',
      data: product || {}, // Передача данных в модальное окно
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Обновлнение продукта
        if (result.id) {
          this.productService.updateProduct(result).subscribe(
            () => {
              this.loadProducts();
            }
          );
          // Добавление продукта
        } else {
          this.productService.addProduct(result).subscribe(
            () => {
              this.loadProducts();
            }
          );
        }
      }
    });
  }


  // Удаление продукта
  deleteProduct(product: IProduct) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.loadProducts();
    });
  }





}