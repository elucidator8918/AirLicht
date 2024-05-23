import { toast } from "react-hot-toast";
import { setLoading, setToken, setUser } from "../../store/slices/authSlice";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";

export const login = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const currTostId = toast.loading("Loading...");
    const res = await apiConnector("POST", authEndpoints.LOGIN_API, formData);
    // work here

    dispatch(setToken("dfsf"));

    toast.dismiss(currTostId);
    toast.success("Logged in successfully!");
    navigate("/dashboard");
  };
};

export const logout = (navigate) => {
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));

    toast.success("Logged out successfully!");
    navigate("/login");
  };
};
