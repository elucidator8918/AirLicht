import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../store/slices/authSlice";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";

export const login = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const currTostId = toast.loading("Loading...");
    try {
      const res = await apiConnector(
        "POST",
        authEndpoints.LOGIN_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          responseType: "blob",
        }
      );
      console.log("Response data:", res);
      console.log("Response Headers:", res.headers);
      // Extract the access token from the response headers

      // debug here

      dispatch(setToken("hh"));
      const accessToken = res.headers["access_token"];
      console.log(accessToken);

      if (accessToken) {
        // Dispatch action to set the token in your application state
        dispatch(setToken(accessToken));
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.error("Login failed: No access token received.");
      }
    } catch (error) {
      if (error?.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Soemthing wents wrong! Please try again.");
      }
    }

    toast.dismiss(currTostId);
    dispatch(setLoading(false));
  };
};

export const signup = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const currTostId = toast.loading("Loading...");
    try {
      const res = await apiConnector(
        "POST",
        authEndpoints.SIGNUP_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );

      toast.success("User registered successfully! Please login now.");
      navigate("/login");
    } catch (error) {
      if (error?.response?.data?.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Soemthing wents wrong! Please try again.");
      }
    }

    toast.dismiss(currTostId);
    dispatch(setLoading(false));
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    dispatch(setToken(null));

    toast.success("Logged out successfully!");
    navigate("/login");
  };
};
