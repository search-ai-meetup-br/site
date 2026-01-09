import About from "../sections/About";
import CTA from "../sections/CTA";
import Events from "../sections/Events"

export default function Main() {
    return (
        <main id="main" className="w-full">
            <About />
            <Events />
            <CTA />
        </main>
    )
}