import {configureStore} from '@reduxjs/toolkit'
const import { reducerName } from './reducer'
import { createStore } from 'redux'

const store = createStore(reducerName)

export default store