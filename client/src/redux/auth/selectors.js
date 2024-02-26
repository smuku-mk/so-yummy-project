export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectAvatarURL = (state) => state.auth.avatarURL;

export const selectUserName = (state) => state.auth.user.name;
