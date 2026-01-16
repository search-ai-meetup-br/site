import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const CodeOfConduct = lazy(
    () => import("../pages/CodeOfConduct/CodeOfConduct.jsx")
);

const routes = [
    { path: "/", element: <Home /> },
    { path: "/code-of-conduct", element: <CodeOfConduct /> },
];

export default function AppRoutes() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}
