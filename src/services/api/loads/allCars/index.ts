import { api } from "../..";
import {Car, CarAPI} from '../../../../shared/types';



export const getAllCars = async() => {
    try {
        const data = await api.get<CarAPI>("/cars.json")
        return data;
    }
    catch(e: any) {
        throw new Error(e);
    }
}