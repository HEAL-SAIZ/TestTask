import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { UnitsOfMeasurmentComponent } from './Components/units-of-measurment/units-of-measurment.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'units-of-measurment', component: UnitsOfMeasurmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }