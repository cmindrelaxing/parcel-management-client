import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../layouts/Dashboard";
import BookAParcel from "../pages/Dashboard/BookAParcel";
import MyParcels from "../pages/Dashboard/MyParcels";
import MyProfile from "../pages/Dashboard/MyProfile";
import PrivateRoute from "./PrivateRoute";
import AllParcels from "../pages/Dashboard/AllParcels";
import AllUsers from "../pages/Dashboard/AllUsers";
import AllDeliveryMen from "../pages/Dashboard/AllDeliveryMen";
import MyDeliveryList from "../pages/Dashboard/MyDeliveryList";
import MyReviews from "../pages/Dashboard/MyReviews";
import UpdateBooking from "../pages/Dashboard/UpdateBooking";
import Payment from "../pages/Dashboard/Payment";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            }
        ]

    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            // admin routes
            {
                path: 'allParcels',
                element: <AdminRoute><AllParcels></AllParcels></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'allDeliveryMen',
                element: <AdminRoute><AllDeliveryMen></AllDeliveryMen></AdminRoute>
            },

            // Delivery Man routes
            {
                path: 'myDeliveryList',
                element: <MyDeliveryList></MyDeliveryList>
            },
            {
                path: 'myReviews',
                element: <MyReviews></MyReviews>
            },


            // normal users routes
            {
                path: 'bookAparcels',
                element: <BookAParcel></BookAParcel>
            },
            {
                path: 'myParcels',
                element: <MyParcels></MyParcels>,
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'myParcels/updateBooking/:id',
                element: <UpdateBooking></UpdateBooking>,
                loader: ({params}) => fetch(`https://parcel-management-server-f42w7wa73.vercel.app/bookings/${params?.id}`)
            },
            {
                path: 'myParcels/payment',
                element: <Payment></Payment>
            },
        ]
    }
]);

export default router;