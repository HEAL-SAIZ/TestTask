import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnitsOfMeasurement } from '../Components/product/UnitsOfMeasurement.modal';

@Injectable({
  providedIn: 'root'
})
export class UnitOfMeasurementService {

  private apiUrl = 'http://localhost:3000/units_of_measurement';

  constructor(private http: HttpClient) { }

  ////
  getUnitsOfMeasurements(): Observable<IUnitsOfMeasurement[]> {
    return this.http.get<IUnitsOfMeasurement[]>(this.apiUrl);
  }


  getUnitsOfMeasurementById(id: number): Observable<IUnitsOfMeasurement | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IUnitsOfMeasurement>(url);
  }
  ////



  ////
  addUnitsOfMeasurement(product: IUnitsOfMeasurement): Observable<IUnitsOfMeasurement> {
    console.log(product)
    return this.http.post<IUnitsOfMeasurement>(this.apiUrl, product);
  }
  ////


  ////
  updateUnitsOfMeasurement(product: IUnitsOfMeasurement): Observable<IUnitsOfMeasurement> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<IUnitsOfMeasurement>(url, product);
  }
  ////


  ////
  deleteUnitsOfMeasurement(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  ////
}
