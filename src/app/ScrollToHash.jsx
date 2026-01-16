import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const id = hash.replace("#", "");
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [hash, pathname]);

    return null;
}
