import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
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
import { UnitsOfMeasurmentModalComponent } from './Components/units-of-measurment/units-of-measurment-modal/units-of-measurment-modal.component';
import { UnitsOfMeasurmentModalInfoComponent } from './Components/units-of-measurment/units-of-measurment-modal-info/units-of-measurment-modal-info.component';
import { UnitsOfMeasurmentComponent } from './Components/units-of-measurment/units-of-measurment.component';
import { UnitOfMeasurementService } from './Services/unit-of-measurement.service';
import { NavbarComponent } from './Components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductModalComponent,
    ProductComponent,
    ProductModalInfoComponent,
    UnitsOfMeasurmentModalComponent,
    UnitsOfMeasurmentModalInfoComponent,
    UnitsOfMeasurmentComponent,
    NavbarComponent
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
    AppRoutingModule,
  ],
  providers: [ProductService, UnitOfMeasurementService],
  bootstrap: [AppComponent],
})
export class AppModule { }