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
    resetUserModal: (state) => {
        state.isUserModalOpen = false;
      },
    toggleProfileModal: (state) => {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },
    resetProfileModal: (state) => {
        state.isProfileModalOpen = false;
      },
    toggleLogOutModal: (state) => { 
      state.isLogOutModalOpen = !state.isLogOutModalOpen;
    },
    resetLogOutModal: (state) => {
        state.isLogOutModalOpen = false;
      },
    
  },
});

export const { toggleUserModal, resetUserModal, toggleProfileModal, resetProfileModal, toggleLogOutModal, resetLogOutModal } = modalSlice.actions;

export const userModalReducer= modalSlice.reducer;