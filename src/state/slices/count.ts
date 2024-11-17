import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

interface countType {
  count: number
}

const initialState: countType = {
  count: 1
}

export const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload
    },
  }

})

export const { add, subtract } = count.actions

export default count.reducer