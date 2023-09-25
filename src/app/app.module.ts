import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductService } from './Services/product.service';
import { ProductModalComponent } from './Components/product/product-modal/product-modal.component';
import { ProductModalInfoComponent } from './Components/product/product-modal-info/product-modal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductComponent,
    ProductModalInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }