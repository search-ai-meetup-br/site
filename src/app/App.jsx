import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRoutes from "../routes/AppRoutes.jsx";
import ScrollToHash from "./ScrollToHash.jsx";

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Suspense fallback={null}>
                <ScrollToHash />
                <AppRoutes />
            </Suspense>
        </BrowserRouter>
    );
}
