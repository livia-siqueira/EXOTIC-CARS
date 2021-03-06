import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCars } from ".";
import { getAllCars } from "../../../services/api/loads";
import { CarAPI } from "@shared/";
import { ThunkConfig } from "../../types";


export const getCarsAsync = createAsyncThunk<CarAPI, void, ThunkConfig>("@cars/setCars",
   async (_, ThunkAPI) => {
     const data = await getAllCars();
     ThunkAPI.dispatch(setCars(data.data))
     return data.data;
    }
)