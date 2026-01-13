import About from "../sections/About";
import CTA from "../sections/CTA";
import Events from "../sections/Events"
import CodeOfCondute from '../sections/CodeOfCondute.jsx'
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