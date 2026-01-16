import { motion } from 'framer-motion'
import { useTranslation } from "react-i18next"
import { EVENT_STATUS, events } from "../../../data/events.js"
import { fadeUp } from "../../../animations/reveal.js"
import IconPin from "../../../assets/icons/i-pin.svg?react"
import IconClock from "../../../assets/icons/i-clock.svg?react"
import Container from "../../ui/Container.jsx";

export default function Events() {

    const { t } = useTranslation();

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-100px" },
    };

    return (
        <section id="events" className='bg-surface'>
            <Container>
                <motion.h2
                    {...animProps}
                    className='text-2xl xs:text-3xl lg:text-4xl col-span-4 sm:col-span-8 mb-4'>{t("events.title")}
                </motion.h2>
                <div className='flex flex-col gap-6 col-span-4 sm:col-span-8 sm:grid sm:grid-cols-2 lg:col-span-12'>
                    {events
                        .filter(event => event.status === EVENT_STATUS.PUBLISHED)
                        .map(event => {
                            return (
                                <motion.div
                                    {...animProps}
                                    key={event.id}
                                    className='bg-background group rounded-xl overflow-hidden shadow hover:shadow-hover transition-shadow duration-500 ease-out'
                                >
                                    <div className="h-40 md:h-45 lg:h-50 overflow-hidden">
                                        <picture>
                                            <source
                                                media="(max-width: 640px)"
                                                srcSet={event.img.mobile}
                                            />
                                            <source
                                                media="(min-width: 641px)"
                                                srcSet={event.img.desktop}
                                            />
                                            <img
                                                src={event.img.desktop}
                                                alt={t(event.title)}
                                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                        </picture>

                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-lg mb-2'>{t(event.title)}</h3>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <IconClock className="h-3 w-3" />
                                            <p>{event.dateTime}</p>
                                        </div>
                                        <div className='flex items-center gap-2 text-sm mt-1'>
                                            <IconPin className="h-3 w-3" />
                                            <p>{event.local}</p>
                                        </div>
                                        <a
                                            href={event.link}
                                            target="_blank" rel="noopener noreferrer"
                                            className="mt-4 block rounded-lg p-2 text-center font-display bg-surface text-text-titles transition-all duration-500 group-hover:bg-primary/70 group-hover:shadow-hover active:scale-98 focus-visible:outline-none focus-visible:ring focus-visible:ring-text-body focus-visible:scale-[102%]"
                                        >
                                            {t("events.buttons.join")}
                                        </a>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </Container>

        </section>
    )
}
