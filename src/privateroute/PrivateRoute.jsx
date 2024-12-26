import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext) 
    const {pathname} = useLocation()
    if(loading)return<Loader></Loader>
    if(user?.email)return children
    return (
        <div>
            <Navigate to="/login" state={pathname}></Navigate>
        </div>
    );
};

export default PrivateRoute;