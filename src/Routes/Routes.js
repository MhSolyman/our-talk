import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LayOut></LayOut>,
        children:[{
        path:'/',
        element:<Home></Home>
        },
        {
            path:'/About',
            element:<About></About>
        },
        {
            path:'/LogIn',
            element:<Login></Login>
        }
    
    
    
    
    ]
    }
])




export default router