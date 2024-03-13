import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'userModal',
  initialState: {
    isUserModalOpen: false,
  },
  reducers: {
    toggleUserModal: (state) => {
      state.isUserModalOpen = !state.isUserModalOpen;
    },
    resetUserModal: (state) => {
        state.isUserModalOpen = false;
      },
  },
});

export const { toggleUserModal, resetUserModal } = modalSlice.actions;

export const userModalReducer= modalSlice.reducer;