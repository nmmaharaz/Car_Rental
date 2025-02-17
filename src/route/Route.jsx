import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AvailableCars from "../page/AvailableCars";
import AddCar from "../page/AddCar";
import MyCars from "../page/MyCars";
import MyBookings from "../page/MyBookings";
import Login from "../page/Login";
import Registration from "../page/Registration";
import CarDetails from "../page/CarDetails";
import PrivateRoute from "../privateroute/PrivateRoute";
import Error from "../components/Error";
import Services from "../components/Sevices";
import ContactSection from "../components/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/availablecars",
            element:<AvailableCars></AvailableCars>
        },
        {
            path:"/addcar",
            element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
        },
        {
            path:"/cars/:id",
            element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>
        },
        {
            path:"/mycars",
            element:<PrivateRoute><MyCars></MyCars></PrivateRoute>
        },
        {
            path:"/mybookings",
            element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        },
        {
            path:"/services",
            element:<Services></Services>
        },
        {
            path:"/contact",
            element:<ContactSection></ContactSection>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/registration",
            element:<Registration></Registration>
        }
      ]
    },
  ]);

export default router