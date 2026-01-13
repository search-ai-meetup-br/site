import Hero from "../sections/Hero"

export default function Header({ children }) {
    return (
        <header id="header" className="w-full relative">
            {children}
        </header>
    )
}