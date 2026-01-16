import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/structure/Footer.jsx";

export default function PublicLayout({ nav, headerContent, children }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return;
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);

    return (
        <>
            <header id="header" className="w-full relative">
                {nav}
                {headerContent}
            </header>
            <main id="main" className="w-full">
                {children}
            </main>
            <Footer />
        </>
    );
}
