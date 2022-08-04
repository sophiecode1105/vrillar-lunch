import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  playing: false,
  isSelected: false,
};

export const gameStatusSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeGameStatus: (state, action: PayloadAction<{ playing: boolean }>) => {
      const { playing } = action.payload;
      state.playing = playing;
    },
    changeResultPage: (state, action: PayloadAction<{ isSelected: boolean }>) => {
      const { isSelected } = action.payload;
      state.isSelected = isSelected;
    },
  },
});

export const { changeGameStatus, changeResultPage } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
