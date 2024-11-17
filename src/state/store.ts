import { configureStore } from '@reduxjs/toolkit'
import count from './slices/count'

export const store = configureStore({
  reducer: {
    count,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch