import { useState, useEffect } from "react"
import { ctaSlides } from "../../data/ctaSlides"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import ArrowLeft from "../../assets/icons/i-arrow-left.svg?react"
import ArrowRight from "../../assets/icons/i-arrow-right.svg?react"
import { fadeUp } from "../../animations/reveal.js"

export default function CTA() {
    const { t } = useTranslation()
    const [index, setIndex] = useState(0)

    const next = () =>
        setIndex((prev) => (prev + 1) % ctaSlides.length)

    const prev = () =>
        setIndex((prev) => (prev - 1 + ctaSlides.length) % ctaSlides.length)

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-100px" },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ctaSlides.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section
            id="cta"
            className="relative bg-[url('/bg-cta.png')] bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-background/40 z-0" />

            <div className="relative z-10 overflow-hidden">
                <motion.div
                    {...animProps}
                    className="flex"
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {ctaSlides.map((slide) => (
                        <div key={slide.id} className="min-w-full">
                            <div className="grid-design">
                                <div className="col-span-4 sm:col-span-6 sm:col-start-2 lg:col-start-4 flex flex-col items-center justify-center px-8 text-center">
                                    <h2 className="text-2xl xs:text-3xl lg:text-4xl">
                                        {t(slide.title)}
                                    </h2>

                                    <p className="mt-6 mb-8 max-w-200">
                                        {t(slide.description)}
                                    </p>

                                    <a
                                        href={slide.action}
                                        target="_blank" rel="noopener noreferrer"
                                        className="bg-linear-to-r cursor-pointer shadow from-primary to-secondary text-text-titles font-display font-semibold p-3 rounded-lg text-sm transition duration-500 hover:brightness-120 hover:scale-[102%] active:scale-98 focus-visible:outline-none focus-visible:ring focus-visible:ring-text-body focus-visible:scale-[102%]"
                                    >
                                        {t(slide.buttonText)}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <div className="absolute z-10 bottom-8 left-0 right-0">
                    <div className="flex gap-3 mt-6 items-center col-span-4 justify-center sm:col-span-6 sm:col-start-2 lg:col-start-4">
                        <button onClick={prev} aria-label={t("cta.arrows.left")} className="cursor-pointer hover:text-text-titles transition-color duration-300 focus-visible:outline-none focus-visible:text-text-titles focus-visible:scale-110">
                            <ArrowLeft className="h-4 w-4" />
                        </button>

                        {ctaSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`w-1.5 h-1.5 rounded-full transition ${i === index ? "bg-primary scale-125 hover:bg-secondary" : "bg-text-body hover:bg-text-titles"} cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-text-body`}
                            />
                        ))}

                        <button onClick={next} aria-label={t("cta.arrows.right")} className="cursor-pointer hover:text-text-titles transition-color duration-300 focus-visible:outline-none focus-visible:text-text-titles focus-visible:scale-110">
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
