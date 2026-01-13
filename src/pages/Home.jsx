import Header from "../components/layout/Header.jsx"
import Footer from "../components/layout/Footer.jsx"
import Main from "../components/layout/Main.jsx"

import About from "../components/sections/About.jsx"
import Events from "../components/sections/Events.jsx"
import CTA from "../components/sections/CTA.jsx"
import CodeOfCondute from "../components/sections/CodeOfCondute.jsx"
import Hero from "../components/sections/Hero.jsx"
import NavBar from "../components/navs/NavBar.jsx"

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