import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../../services/api/loads/allCars";
import { AppDispatch, RootState,  ThunkConfig } from "../../types";


export const getCarsAsync = createAsyncThunk("@cars/setCars",
   async () => {
     const data = await getAllCars();
     return data;
    }
)