import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'userModal',
  initialState: {
    isUserLogoModalOpen: false,
    isUserInfoModalOpen: false,
    isLogOutModalOpen: false,
  },
  reducers: {
    toggleUserLogoModal: (state) => {
      state.isUserLogoModalOpen = !state.isUserLogoModalOpen;
    },
    toggleUserInfoModal: (state) => {
      state.isUserInfoModalOpen = !state.isUserInfoModalOpen;
    },
    toggleLogOutModal: (state) => { 
      state.isLogOutModalOpen = !state.isLogOutModalOpen;
    },
    resetModals: (state) => {
      state.isUserLogoModalOpen = false;
      state.isUserInfoModalOpen = false;
      state.isLogOutModalOpen = false;
    },    
  },
});

export const { toggleUserLogoModal, toggleUserInfoModal, toggleLogOutModal, resetModals } = modalSlice.actions;

export const userModalReducer= modalSlice.reducer;