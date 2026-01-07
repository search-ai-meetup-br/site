import { useTranslation } from "react-i18next";
import IconLinkedin from "../../assets/icons/i-linkedin.svg?react"
import IconEmail from "../../assets/icons/i-email.svg?react"
import IconMeetup from "../../assets/icons/i-meetup.svg?react"
import Logo from "../../assets/images/logo.svg?react"
import { motion } from "framer-motion";
import { titleContainer, titleWord, fadeUpSoft, heroIntro } from "../../animations/reveal.js";


export default function Hero() {

    const { t } = useTranslation();
    const titleWords = t("hero.title").split(" ");
    const highlightWords = t("hero.highlight").split(" ");


    return (
        <motion.section
            id="hero"
            className="content-center min-h-screen bg-radial from-primary/12 to-background/12 to-80% md:to-70% lg:to-60%"
            variants={heroIntro}
            initial="hidden"
            animate="show"
        >

            <div className="grid-design mx-auto max-w-7xl">
                <motion.div
                    className="col-span-4 flex flex-col items-center gap-4 sm:col-span-6 sm:col-start-2 lg:col-start-4"
                    variants={fadeUpSoft}
                >
                    <Logo
                        variants={fadeUpSoft}
                        role="img"
                        aria-label={t("hero.logoAlt")}
                        className="max-h-24"
                    />
                    <motion.h1
                        className="uppercase text-4xl xs:text-5xl lg:text-6xl text-center text-shadow"
                        variants={titleContainer}
                        initial="hidden"
                        animate="show"
                    >
                        {titleWords.map((word, i) => (
                            <motion.span
                                key={`title-${i}`}
                                variants={titleWord}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        {highlightWords.map((word, i) => (
                            <motion.span
                                key={`highlight-${i}`}
                                variants={titleWord}
                                className="inline-block mr-2 text-gradient"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                </motion.div>
                <motion.p
                    className="col-span-4 text-center text-text-titles sm:col-span-6 sm:col-start-2 lg:col-start-4"
                    variants={fadeUpSoft}>
                    {t("hero.description")}
                </motion.p>
                <motion.div
                    className="flex flex-col gap-4 col-span-4 sm:col-span-6 sm:col-start-2 sm:flex-row lg:col-start-4"
                    variants={fadeUpSoft}>
                    <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-linear-to-r shadow from-primary to-secondary text-text-titles font-display font-semibold p-3 rounded-lg text-center text-sm sm:flex-1 transition-colors-transform duration-500 hover:brightness-120 hover:scale-[102%] active:scale-[98%] focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:scale-[102%]">
                        {t("hero.buttons.join")}
                    </a>
                    <a href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-titles p-3 font-display font-semibold rounded-lg border border-text-body bg-surface text-center text-sm sm:flex-1 transition-colors-transform duration-500 hover:bg-primary/10 hover:scale-[102%] active:scale-[98%] focus-visible:outline-none focus-visible:ring focus-visible:ring-text-titles focus-visible:scale-[102%]">
                        {t("hero.buttons.events")}
                    </a>
                </motion.div>
                <motion.div
                    className="flex gap-4 col-span-4 items-center justify-center sm:col-span-6 sm:col-start-2 lg:col-start-4"
                    variants={fadeUpSoft}>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t("hero.links.linkedin")} className="transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary"><IconLinkedin className="h-7" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t("hero.links.email")} className="transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary"><IconEmail className="h-7" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t("hero.links.meetup")} className="transition-colors-transform duration-300 hover:text-primary hover:scale-105 active:scale-[98%] focus-visible:outline-none focus-visible:scale-105 focus-visible:text-primary"><IconMeetup className="h-7" /></a>
                </motion.div>
            </div>

        </motion.section>
    )
}