import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg?react"

export default function NavBarInternal() {
    const { t } = useTranslation();

    return (
        <div className="fixed top-0 w-full z-50 bg-background/85 md:bg-background/70 backdrop-blur-md border-b border-text-body/20">
            <div className="px-6 xs:px-10 md:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">
                <div
                    className="flex items-center uppercase text-white font-semibold font-display text-sm"
                >
                    <Logo className="h-5 w-5 mr-2" />
                    <span>Search & AI</span>
                    <span className="text-gradient ml-2">Meetup BR</span>
                </div>
                <nav>
                    <Link to="/" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary text-sm">
                        <span className="md:hidden">{t("navBar.back.sm")}</span>
                        <span className="hidden md:inline">{t("navBar.back.md")}</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
