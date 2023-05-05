import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Offers from "./Components/Offers";
import OfferClass from "./Components/OffersClass";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./Components/Help";

const Instamart = lazy(() => import("./Components/Instamart"));


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    //Nested Routing 
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/offers",
                element: <OfferClass title="Hola!!!" />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantDetails />
                //https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=229
            },
            {
                path: "/help",
                element: <Help />
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<h4>---- Loading ---</h4>}>
                        <Instamart />
                    </Suspense>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



