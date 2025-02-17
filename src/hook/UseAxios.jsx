import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://car-rental-theta-lac.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 401)
          logout();
        navigate("/login");
      }
    );
  }, [logout, navigate]);
  return axiosSecure
};
export default useAxiosSecure;
