import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LogIn/Login";
import Media from "../Pages/Media/Media";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/About',
            element: <About></About>
        },
        {
            path: '/LogIn',
            element: <Login></Login>
        }
            , {
            path: '/media',
            element: <Media></Media>
        },
        {
            path:'/post/:id',
            loader: ({ params }) => fetch(`https://c-orpin.vercel.app/post/${params.id}`),
            element:<Details></Details>
        },
        {
            path:'/register',
            element: <Register></Register>
        }



        ]
    }
])




export default router