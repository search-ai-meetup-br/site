import Logo from "../../assets/images/logo.svg?react"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NavBar() {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const handleNavigate = (e, target) => {
        e.preventDefault();
        setOpen(false);

        setTimeout(() => {
            document.querySelector(target)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    return (
        <div className="fixed top-0 w-full z-50 bg-background/85 md:bg-background/70 backdrop-blur-md border-b border-text-body/20">
            <div className="px-6 xs:px-10 md:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">

                <a
                    href="#hero"
                    className="flex items-center uppercase text-white font-semibold font-display text-sm"
                >
                    <Logo className="h-5 w-5 mr-2" />
                    <span>Search & AI</span>
                    <span className="text-gradient ml-2">Meetup BR</span>
                </a>

                <div className="hidden md:flex md:gap-4 text-sm items-center">
                    <nav className="space-x-4">
                        <a href="#about" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.about")}</a>
                        <a href="#events" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.events")}</a>
                        <a href="#cta" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.cta")}</a>
                        <a href="#codeOfCondute" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.codeOfCondute")}</a>
                    </nav>
                    <span>|</span>
                    <div className="space-x-4">
                        <button className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer">PT</button>
                        <button className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer">EN</button>
                    </div>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-label="Abrir menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden "
                    >
                        <nav className="flex flex-col text-center px-6 py-4 space-y-4 text-sm">
                            {[
                                [t('navBar.about'), "#about"],
                                [t('navBar.events'), "#events"],
                                [t('navBar.cta'), "#cta"],
                                [t('navBar.codeOfCondute'), "#codeOfCondute"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={(e) => handleNavigate(e, href)}
                                    className="cursor-pointer hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary"
                                >
                                    {label}
                                </a>

                            ))}

                            <div className="pt-4 border-t border-text-body/20 flex gap-4 justify-center">
                                <button>PT</button>
                                <button>EN</button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
