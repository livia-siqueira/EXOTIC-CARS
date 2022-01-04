import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Car, CarAPI} from "../../../shared/types"


type initialStateT = {
    cars: Car[];
    carSelected: Car | null;
}

const initialState : initialStateT= {
    cars: [],
    carSelected: null
    
}

const carsReducer = createSlice({
    name: '@cars',
    initialState,
    reducers: {
        setCars: (state, action : PayloadAction<CarAPI>) => {
            state.cars = action.payload.cars
            return state;
        },
        getCar: (state, action: PayloadAction<{id: number}>) => {
            const carActual = state.cars.find(({id}) => id === action.payload.id);
            if(carActual) state.carSelected = carActual
            return state;
        }
    },
})

export const {setCars, getCar}  = carsReducer.actions;
export default carsReducer.reducer;

