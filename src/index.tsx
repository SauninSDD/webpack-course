import {createRoot} from "react-dom/client";
import {App} from "./components/App/App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "@/pages/about/LazyAbout";
import {Shop} from "@/pages/shop";
import {Suspense} from "react";


const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <DevSupport ComponentPreviews={ComponentPreviews}
                             useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>,
        children: [
            {
              path: '/about',
              element: <Suspense fallback={'Loading...'}> <LazyAbout/> </Suspense>

            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading'}> <Shop/> </Suspense>
            }
        ]
    },
]);

container.render(<RouterProvider router={router}/>)