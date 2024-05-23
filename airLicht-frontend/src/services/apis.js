const BASE_URL = import.meta.env.VITE_BASE_URL;

// add all urls here and use them by importing
export const authEndpoints = {
  LOGIN_API: BASE_URL + "/login",
};

export const modelEndpoints = {
  PROVIDE_SUGGESTIONS: BASE_URL + "/model/suggestions",
};