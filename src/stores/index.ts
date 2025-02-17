import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './rootReducer'

export const Store = configureStore({ reducer: RootReducer })

export type RootState = ReturnType<typeof Store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default Store