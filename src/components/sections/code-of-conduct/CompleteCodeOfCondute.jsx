import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'
import { fadeUp } from "../../../animations/reveal.js"
import Container from "../../ui/Container.jsx";

export default function CodeOfConductPage() {
    const { t } = useTranslation();

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-50px" },
    };

    return (
        <section className="bg-linear-to-br from-background to-primary/5">

            <Container>

                <div className="col-span-4 sm:col-span-8 lg:col-span-12">
                    <motion.h1
                        {...animProps}
                        className="text-4xl md:text-5xl font-bold mb-8 whitespace-pre-line">
                        {t("codeOfCondutePage.title")}
                    </motion.h1>

                    <motion.p
                        {...animProps}
                        className="mb-4 ">
                        {t("codeOfCondutePage.description")}
                    </motion.p>

                    <motion.p {...animProps}>
                        {t("codeOfCondutePage.intro")}
                    </motion.p>
                </div>

                <div className="col-span-4 sm:col-span-8 lg:col-span-12 space-y-8">
                    {t("codeOfCondutePage.sections", { returnObjects: true }).map(
                        (section, index) => (
                            <motion.div
                                {...animProps}
                                key={index}
                                className="bg-surface backdrop-blur-md border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-colors duration-500 ease-out"
                            >
                                <h2 className="text-xl mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 min-w-8 min-h-8   shrink-0 rounded-lg bg-primary/20 text-primary text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </h2>

                                {section.text && (
                                    <p className="mb-4">
                                        {section.text}
                                    </p>
                                )}

                                {section.points && (
                                    <ul className="space-y-2">
                                        {section.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3"
                                            >
                                                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        )
                    )}
                </div>

                <div className="col-span-4 sm:col-span-8 lg:col-span-12">
                    <hr className="border-t border-text-body/15 bg-transparent mt-8" />
                    <div className="p-6 text-center">
                        {t("codeOfCondutePage.conclusion", { returnObjects: true }).map(
                            (line, idx) => (
                                <p
                                    key={idx}
                                    className="mb-10 last:text-primary last:text-md last:font-semibold last:font-display last:mb-0"
                                >
                                    {line}
                                </p>
                            )
                        )}
                    </div>
                </div>

            </Container>
        </section>
    );
}
