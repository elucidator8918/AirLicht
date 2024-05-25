import { toast } from "react-hot-toast";
import { setLoading } from "../../store/slices/authSlice";
import { apiConnector } from "../apiConnector";
import { modelEndpoints } from "../apis";

export const provideReco =  async(formData) => {
    const currTostId = toast.loading("Providing suggestions");
    try {
      const res = await apiConnector(
        "POST",
        modelEndpoints.PROVIDE_RECO,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      console.log(res);
      return res.data.text;
      // return "";
    } catch (error) {
      console.log(error);
      toast.error("Error in providing suggestions");
    } finally {
      // dispatch(setLoading(false));
      toast.dismiss(currTostId);
    }
};
