import {configureStore} from '@reduxjs/toolkit'
import calculatorReducer from './CalculateReducer'
const store = configureStore({
    reducer: {
        calcalculatorReducer
    }
})