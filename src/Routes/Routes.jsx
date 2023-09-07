import { createBrowserRouter } from "react-router-dom";
import Login from '../Component/Login/Login';
import Dashboard from "../Component/Dashboard/Dashboard";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
        ]
    }

    
])