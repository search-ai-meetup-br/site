import Header from "../../components/layout/Header.jsx"
import Footer from "../../components/layout/Footer.jsx"
import Main from "../../components/layout/Main.jsx"

import About from "./sections/About.jsx"
import Events from "./sections/Events.jsx"
import CTA from "./sections/CTA.jsx"
import CodeOfCondute from "./sections/CodeOfCondute.jsx"
import Hero from "./sections/Hero.jsx"
import NavBar from "../../components/navs/NavBar.jsx"

export default function Home() {
    return (
        <>
            <Header>
                <NavBar />
                <Hero />
            </Header>
            <Main>
                <About />
                <Events />
                <CTA />
                <CodeOfCondute />
            </Main>
            <Footer />
        </>
    )
}