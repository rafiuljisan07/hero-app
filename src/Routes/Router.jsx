import { createBrowserRouter } from "react-router";
import MainLayer from "../Layers/MainLayer";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayer,
        errorElement: <Error/>,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/:id',
                Component: AppDetails
            }
        ]
    }
])
export default router;