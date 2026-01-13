import { useEffect } from "react";

export default function Main({ children }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <main id="main" className="w-full">
            {children}
        </main>
    )
}