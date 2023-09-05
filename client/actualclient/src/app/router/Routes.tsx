import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";
import About from "../../features/about/About";
import Home from "../../features/home/Home";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";

export const ruter = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {path:"", element: <Home />},
            {path:"catalog", element: <Catalog />},
            {path:"catalog/:id", element: <ProductDetails />},
            {path:"about", element: <About />},
            
            {path:"server-error", element: <ServerError />},
            {path:"not-found", element: <NotFound />},
            {path:"*", element: <Navigate replace to="/not-found" />},
        ]
    }
])