import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "@/pages/about/LazyAbout";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(DevSupport, { ComponentPreviews: ComponentPreviews, useInitialHook: useInitial, children: _jsx(App, {}) }),
        children: [
            {
                path: '/about',
                element: _jsxs(Suspense, { fallback: 'Loading...', children: [" ", _jsx(LazyAbout, {}), " "] })
            },
            {
                path: '/shop',
                element: _jsxs(Suspense, { fallback: 'Loading', children: [" ", _jsx(Shop, {}), " "] })
            }
        ]
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
