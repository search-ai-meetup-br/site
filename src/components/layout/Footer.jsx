import Logo from "../../assets/images/logo.svg?react"
import IconLinkedin from "../../assets/icons/i-linkedin.svg?react"
import IconEmail from "../../assets/icons/i-email.svg?react"
import IconMeetup from "../../assets/icons/i-meetup.svg?react"
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer id="footer" className="">
            <div className='grid-design max-w-7xl mx-auto'>
                <div className="col-span-4 lg:col-span-5 space-y-4">
                    <div
                        href="#hero"
                        className="flex items-center uppercase text-white font-semibold font-display text-sm"
                    >
                        <Logo className="h-5 w-5 mr-2" />
                        <span>Search & AI</span>
                        <span className="text-gradient ml-2">Meetup BR</span>
                    </div>

                    <p className="text-sm">{t("footer.description")}</p>

                    <span className="text-xs">© 2026 Search & AI Meetup BR</span>
                </div>
                <div className='col-span-4 sm:col-start-6 lg:col-span-5 lg:col-start-8 space-y-4'>
                    <h2 className="text-md">{t("footer.connect")}</h2>
                    <div className="flex gap-4">
                        <IconLinkedin
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("footer.links.linkedin")}
                            className="h-6 w-6 transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary cursor-pointer" />
                        <IconEmail
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("footer.links.email")}
                            className="h-6 w-6 transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary cursor-pointer" />
                        <IconMeetup
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("footer.links.meetup")}
                            className="h-6 w-6 transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}