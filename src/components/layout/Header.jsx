import Hero from "../sections/Hero"

export default function Header() {
    return (
        <header id="header" className="w-full bg-radial from-primary/12 to-background/12 to-80% md:to-70% lg:to-60%">
            <div className="max-w-7xl mx-auto">
                <Hero />
            </div>
        </header>
    )
}