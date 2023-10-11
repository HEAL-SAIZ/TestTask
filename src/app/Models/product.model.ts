import { IUnitsOfMeasurement } from "./UnitsOfMeasurement.modal";

export interface IProduct {
    id: number;
    name: string;
    quantity: number;
    unit_cost: number;
    units_of_measurement: IUnitsOfMeasurement;
}