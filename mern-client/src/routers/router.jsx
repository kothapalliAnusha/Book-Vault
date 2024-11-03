import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import AdminDashboard from "../components/AdminDashboard";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRouter from "../privateRoute/PrivateRouter";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    // for front end
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path: '/shop',
          element:<Shop/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/blog',
          element:<Blog/>
        },
        {
          path: '/admin/dashboard',
          element: <AdminDashboard/>
        },
        {
          path: '/book/:id',
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`).then(res=>res.json())
        }

      

      ]
    },


    // admin
    {
      path: '/admin/dashboard',
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRouter><Dashboard/></PrivateRouter>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBooks/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`).then(res=>res.json())
          
        },
         ]},

         //sign-up at root-leve;
         {
          path:"/sign-up",
          element:<SignUp/>
        },{
          path:"/login",
          element:<Login/>

        },{
          path:"/logout",
          element:<Logout/>
        }



  ]);

  export default router;