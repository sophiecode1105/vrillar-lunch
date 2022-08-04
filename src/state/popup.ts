import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  message: '',
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<{ message: string }>) => {
      const { message } = action.payload;
      state.isOpen = true;
      state.message = message;
    },
    closeModal: (state, action: PayloadAction) => {
      state.isOpen = false;
    },
  },
});

export const { changeMessage, closeModal } = popupSlice.actions;
export default popupSlice.reducer;
