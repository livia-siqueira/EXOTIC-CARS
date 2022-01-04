import{ configureStore} from '@reduxjs/toolkit'
import carsReducer from './reducers/car'


export const store = configureStore({
    reducer : {
        cars: carsReducer
    }
});