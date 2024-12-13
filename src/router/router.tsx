import {createBrowserRouter} from "react-router";
import Layout from "@/layouts/layout.tsx";
import Home from "@/pages/home.tsx";



const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default  router