import { createBrowserRouter } from "react-router";
import MainLayer from "../Layers/MainLayer";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayer,
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
            }
        ]
    }
])
export default router;