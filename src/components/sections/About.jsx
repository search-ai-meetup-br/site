import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { aboutCards } from "../../data/aboutCards";
import { fadeUp } from "../../animations/reveal.js"

export default function About() {

    const { t } = useTranslation();

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-100px" },
    };

    return (
        <section id="about">

            <div className='grid-design max-w-7xl mx-auto'>
                <motion.h2
                    {...animProps}
                    className='text-2xl xs:text-3xl lg:text-4xl col-span-4 text-center sm:col-start-2 sm:col-span-6 lg:col-start-4'
                >
                    {t("about.titleLine1")}
                    <br />
                    {t("about.titleLine2")} {" "}
                    <span className='text-gradient text-shadow'>
                        {t("about.highlight")}
                    </span>
                </motion.h2>
                <motion.p
                    {...animProps}
                    className='col-span-4 text-center mb-6 sm:col-start-2 sm:col-span-6 lg:col-start-4'>
                    {t("about.description")}
                </motion.p>
                <div className='col-span-4 grid grid-rows-3 gap-6 sm:col-span-8 sm:grid-rows-2 sm:grid-cols-4 lg:col-span-12 lg:grid-cols-3 lg:grid-rows-1 lg:my-6'>
                    {aboutCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                {...animProps}
                                whileHover={{ scale: 1.015, transition: {duration: .5}}}
                                key={card.id}
                                className={`bg-surface shadow p-6 rounded-xl flex flex-col items-start gap-2 ${card.id === "share" ? "border-t-6 border-primary sm:col-start-2 sm:row-start-2 lg:col-start-2 lg:row-start-1 lg:-translate-y-6" : ""} ${card.id !== "share" ? "lg:translate-y-6" : ""} sm:col-span-2 lg:col-span-1 hover:shadow-hover transition-shadow duration-500`}>
                                <div className='bg-primary/10 text-primary rounded-sm p-2'>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className='text-xl'>{t(card.titleKey)}</h3>
                                <p>{t(card.descriptionKey)}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}