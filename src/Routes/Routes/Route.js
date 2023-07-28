import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/MainLayout/Main";

import LogIn from "../../Components/Pages/LogIn/LogIn";
import Home from "../../Components/Pages/Home/Home/Home";
import Category from "../../Components/Pages/Category/Category";
import ProductCategory from "../../Components/Pages/Home/ProductCategory/ProductCategory";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import Dashboard from "../../Components/Pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashBoardLayout from "../../LayOut/DashLayout/DashBoardLayout";
import MyOrders from "../../LayOut/DashLayout/MyOrders/MyOrders";
import DashAdminRoute from "../DashAdminRoute/DashAdminRoute";
import AllSeller from "../../LayOut/DashLayout/AllSeller/AllSeller";
import AllBuyer from "../../LayOut/DashLayout/AllBuyer/AllBuyer";
import AddProduct from "../../LayOut/DashLayout/AddProduct/AddProduct";
import Payment from "../../Components/Pages/Dashboard/Payment";
import DisplayError from "../../Components/Shared/DisplayError/DisplayError";
import MyProduct from "../../LayOut/DashLayout/AddProduct/MyProduct";
import Blogs from "../../Components/Pages/Blogs/Blogs";
import MyBuyers from "../../LayOut/DashLayout/MyBuyers/MyBuyers";
import WishList from "../../Components/Pages/Dashboard/WishList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:category',
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params?.category}`),
                element: <PrivateRoute><Category></Category></PrivateRoute>
            },
            
            {
                path: '/blog',
                
                element: <Blogs></Blogs>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',

                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/sellers',
                // loader: () => fetch('http://localhost:5000/sellers'),
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/buyers',
                // loader: () => fetch('http://localhost:5000/buyer'),
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/addproduct',
               
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/categories/:SellerEmail',
            //    loader: ({params})=> fetch(`http://localhost:5000/dashboard/categories/${params.SellerEmail}`),
                element: <MyProduct></MyProduct>
            },
           
            {
                path: '/dashboard/payment/:_id',
               loader: ({params})=> fetch(`http://localhost:5000/dashboard/payment/${params?._id}`),
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/mybuyerfind/:SellerEmail',
            //    loader: ({params})=> fetch(`http://localhost:5000/dashboard/mybuyerfind/${params.SellerEmail}`),
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/wishlist/:buyerEmail',
           
                element: <WishList></WishList>
            },
        ]
    }
])