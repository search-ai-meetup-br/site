import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next";
import { codeOfConduteCards } from "../../data/codeOfConduteCards.js";
import { fadeUp } from "../../animations/reveal.js"

export default function CodeOfCondute() {

    const { t } = useTranslation();

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-100px" },
    };

    return (
        <section id="codeOfCondute">
            <div className='grid-design max-w-7xl mx-auto'>
                <motion.div
                    {...animProps}
                    className='col-span-4 space-y-3 sm:col-span-8 md:col-span-4 lg:col-span-6'>
                    <h2 className='text-2xl xs:text-3xl lg:text-4xl'>{t("codeOfCondute.title")}</h2>
                    <p>{t("codeOfCondute.description")}</p>
                    <button className='border text-sm border-primary p-2.5 text-primary rounded-lg hover:bg-primary/20 cursor-pointer active:text-text-titles active:border-text-titles active:scale-98 transition-colors-transform duration-300'>{t("codeOfCondute.button")}</button>
                </motion.div>
                <div className='col-span-4 flex flex-col gap-8 mt-4 sm:col-span-8 md:mt-0 md:col-span-4 lg:col-span-6'>
                    {codeOfConduteCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.id}
                                {...animProps}
                                className='flex gap-4'>
                                <div className='bg-primary/20 text-primary rounded-sm p-2 self-start'>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className='text-lg mb-1'>{t(card.title)}</h3>
                                    <p>{t(card.description)}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}