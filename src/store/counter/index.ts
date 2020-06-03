import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {initialState} from './state';

/**
 * Reducer定義
 */
const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    calculate: (
      state,
      action: PayloadAction<Pick<ICountPayloadType, 'plusCount'>>
    ) => {
      state.count += action.payload.plusCount;
    },
  },
});

/** Action Creatorをエクスポート */
export const {calculate} = countSlice.actions;

/** reducerをエクスポート */
export default countSlice.reducer;
