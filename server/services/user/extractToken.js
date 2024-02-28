export const extractToken = (headers) => {
    return headers.authorization?.replace("Bearer ", "");
  };