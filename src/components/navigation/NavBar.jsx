import Logo from "../../assets/images/logo.svg?react"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NavBar() {

    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed top-0 w-full z-50 bg-background/85 md:bg-background/70 backdrop-blur-md border-b border-text-body/20">
            <div className="px-6 xs:px-10 md:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">

                <Link
                    to="/#hero"
                    className="flex items-center uppercase text-white font-semibold font-display text-sm"
                >
                    <Logo className="h-5 w-5 mr-2" />
                    <span>Search & AI</span>
                    <span className="text-gradient ml-2">Meetup BR</span>
                </Link>

                <div className="hidden md:flex md:gap-4 text-sm items-center">
                    <nav className="space-x-4">
                        <Link to="/#about" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.about")}</Link>
                        <Link to="/#events" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.events")}</Link>
                        <Link to="/#cta" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.cta")}</Link>
                        <Link to="/#codeOfCondute" className="hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary">{t("navBar.codeOfCondute")}</Link>
                    </nav>
                    <span>|</span>
                    <div className="space-x-4">
                        <button
                            onClick={() => changeLanguage("pt")}
                            aria-label={t("navBar.languages.pt")}
                            type="button"
                            className={`transition-colors duration-300 ${i18n.language === "pt" ? "text-primary font-semibold" : "hover:text-primary"} active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer`}>PT</button>
                        <button
                            onClick={() => changeLanguage("en")}
                            aria-label={t("navBar.languages.en")}
                            type="button"
                            className={`transition-colors duration-300 ${i18n.language === "en" ? "text-primary font-semibold" : "hover:text-primary"} active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer`}>EN</button>
                    </div>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden cursor-pointer"
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden "
                    >
                        <nav className="flex flex-col text-center px-6 py-4 space-y-4 text-sm">
                            {[
                                [t('navBar.about'), "/#about"],
                                [t('navBar.events'), "/#events"],
                                [t('navBar.cta'), "/#cta"],
                                [t('navBar.codeOfCondute'), "/#codeOfCondute"],
                            ].map(([label, to]) => (
                                <Link
                                    key={label}
                                    to={to}
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer hover:text-primary transition-colors duration-300 active:text-secondary focus-visible:outline-none focus-visible:text-primary"
                                >
                                    {label}
                                </Link>

                            ))}

                            <div className="pt-4 border-t border-text-body/20 flex gap-4 justify-center">
                                <button
                                    onClick={() => changeLanguage("pt")}
                                    aria-label={t("navBar.languages.pt")}
                                    type="button"
                                    className={`transition-colors duration-300 ${i18n.language === "pt" ? "text-primary font-semibold" : "hover:text-primary"} active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer`}>PT</button>
                                <button
                                    onClick={() => changeLanguage("en")}
                                    aria-label={t("navBar.languages.en")}
                                    type="button"
                                    className={`transition-colors duration-300 ${i18n.language === "en" ? "text-primary font-semibold" : "hover:text-primary"} active:text-secondary focus-visible:outline-none focus-visible:text-primary cursor-pointer`}>EN</button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
