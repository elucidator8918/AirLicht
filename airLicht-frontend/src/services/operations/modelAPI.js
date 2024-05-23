import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { apiConnector } from "../apiConnector";
import { modelEndpoints } from "../apis";

export const provideSuggestions = ({ formData, token }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const currTostId = toast.loading("Providing suggestions");
    // const { data, error } = await apiConnector({
    //   method: "POST",
    //   url: modelEndpoints.PROVIDE_SUGGESTIONS,
    //   data: formData,
    //   token,
    // });

    // if (error) {
    //   toast.error("Error in providing suggestions");
    //   return;
    // }

    console.log(formData, token);
    setTimeout(() => {
      dispatch(setLoading(false));
      toast.dismiss(currTostId);
      toast.success("Suggestions provided successfully");
    }, 2000);
  };
};
