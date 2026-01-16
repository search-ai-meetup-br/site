import PublicLayout from "../../layouts/PublicLayout.jsx";
import About from "../../components/sections/home/About.jsx";
import Events from "../../components/sections/home/Events.jsx";
import CTA from "../../components/sections/home/CTA.jsx";
import CodeOfCondute from "../../components/sections/home/CodeOfCondute.jsx";
import Hero from "../../components/sections/home/Hero.jsx";
import NavBar from "../../components/navigation/NavBar.jsx";

export default function Home() {
    return (
        <PublicLayout nav={<NavBar />} headerContent={<Hero />}>
            <About />
            <Events />
            <CTA />
            <CodeOfCondute />
        </PublicLayout>
    )
}
