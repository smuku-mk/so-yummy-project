import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'userModal',
  initialState: {
    isUserModalOpen: false,
    isProfileModalOpen: false,
    isLogOutModalOpen: false,
  },
  reducers: {
    toggleUserModal: (state) => {
      state.isUserModalOpen = !state.isUserModalOpen;
    },
    toggleProfileModal: (state) => {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },
    toggleLogOutModal: (state) => { 
      state.isLogOutModalOpen = !state.isLogOutModalOpen;
    },
    resetModals: (state) => {
      state.isUserModalOpen = false;
      state.isProfileModalOpen = false;
      state.isLogOutModalOpen = false;
    },    
  },
});

export const { toggleUserModal, toggleProfileModal, toggleLogOutModal, resetModals } = modalSlice.actions;

export const userModalReducer= modalSlice.reducer;