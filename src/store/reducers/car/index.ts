import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Car} from "../../../shared/types"
import { getCarsAsync } from "./thunk"


type initialStateT = {
    cars: Car[];
}

const initialState : initialStateT= {
    cars: []
}

const carsReducer = createSlice({
    name: '@cars',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCarsAsync.fulfilled, (state, action) => {
            state.cars = action.payload.data.cars
        })
    }
})

export default carsReducer.reducer;

