import About from "../sections/About";
import CTA from "../sections/CTA";
import Events from "../sections/Events"
import CodeOfCondute from '../sections/CodeOfCondute.jsx'

export default function Main({ children }) {
    return (
        <main id="main" className="w-full">
            {children}
        </main>
    )
}