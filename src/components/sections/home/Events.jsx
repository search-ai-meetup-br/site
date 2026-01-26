import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"
import { fetchEventsFromSheet } from "../../../data/eventsFromSheet.js";
import { fadeUp } from "../../../animations/reveal.js"
import IconPin from "../../../assets/icons/i-pin.svg?react"
import IconClock from "../../../assets/icons/i-clock.svg?react"
import ImgEvent from "../../../assets/images/events/event.png";
import Container from "../../ui/Container.jsx";

export default function Events() {

    const { t, i18n } = useTranslation();
    const [events, setEvents] = useState([]);
    const [status, setStatus] = useState({ loading: true, error: null });

    const animProps = {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-100px" },
    };

    useEffect(() => {
        let active = true;

        const loadEvents = async () => {
            setStatus({ loading: true, error: null });
            try {
                const data = await fetchEventsFromSheet();
                if (active) {
                    setEvents(data);
                    setStatus({ loading: false, error: null });
                }
            } catch (error) {
                if (active) {
                    setStatus({ loading: false, error: error });
                }
            }
        };

        loadEvents();

        return () => {
            active = false;
        };
    }, []);

    const upcomingEvents = useMemo(() => {
        const now = Date.now();

        return events
            .map((event) => ({
                ...event,
                startsAtDate: new Date(event.startsAt),
            }))
            .filter((event) => !Number.isNaN(event.startsAtDate.valueOf()))
            .filter((event) => event.startsAtDate.getTime() >= now)
            .sort((a, b) => a.startsAtDate - b.startsAtDate)
            .slice(0, 2);
    }, [events]);

    const isPortuguese = (i18n.language || "").toLowerCase().startsWith("pt");

    const getEventTitle = (event) => {
        if (isPortuguese) {
            return event.titlePT || event.titleEN;
        }

        return event.titleEN || event.titlePT;
    };

    const formatStartsAt = (value, includeTime = true) => {
        const parsed = new Date(value);
        if (Number.isNaN(parsed.valueOf())) {
            return value;
        }

        const locale = isPortuguese ? "pt-BR" : "en-US";
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        };

        if (includeTime) {
            options.hour = "2-digit";
            options.minute = "2-digit";
            options.hour12 = false;
        }

        const formatted = new Intl.DateTimeFormat(locale, options).format(parsed);

        return includeTime ? `${formatted} (BRT)` : formatted;
    };

    return (
        <section id="events" className='bg-surface'>
            <Container>
                <motion.h2
                    {...animProps}
                    className='text-2xl xs:text-3xl lg:text-4xl col-span-4 sm:col-span-8 mb-4'>{t("events.title")}
                </motion.h2>
                <div className='flex flex-col gap-6 col-span-4 sm:col-span-8 sm:grid sm:grid-cols-2 lg:col-span-12'>
                    {status.loading && (
                        <div className="text-sm text-text-body">{t("events.loading")}</div>
                    )}
                    {!status.loading && status.error && (
                        <div className="text-sm text-text-body">{t("events.error")}</div>
                    )}
                    {!status.loading && !status.error && upcomingEvents.map((event) => {
                        const title = getEventTitle(event);
                        const link = event.link ? event.link.trim() : "";
                        const hasLink = Boolean(link);
                        const desktopBanner = event.bannerDesktopUrl || (event.bannerMobileUrl ? event.bannerMobileUrl : ImgEvent);
                        const mobileBanner = event.bannerMobileUrl || (event.bannerDesktopUrl ? event.bannerDesktopUrl : ImgEvent);

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
                                            srcSet={mobileBanner}
                                        />
                                        <source
                                            media="(min-width: 641px)"
                                            srcSet={desktopBanner}
                                        />
                                        <img
                                            src={desktopBanner}
                                            alt={title}
                                            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                    </picture>

                                </div>
                                <div className='p-6'>
                                    <h3 className='text-lg mb-2'>{title}</h3>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <IconClock className="h-3 w-3" />
                                        <p>{formatStartsAt(event.startsAt, hasLink)}</p>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm mt-1'>
                                        <IconPin className="h-3 w-3" />
                                        <p>{event.local}</p>
                                    </div>
                                    {hasLink ? (
                                        <a
                                            href={link}
                                            target="_blank" rel="noopener noreferrer"
                                            className="mt-4 block rounded-lg p-2 text-center font-display bg-surface text-text-titles transition-all duration-500 group-hover:bg-primary/70 group-hover:shadow-hover active:scale-98 focus-visible:outline-none focus-visible:ring focus-visible:ring-text-body focus-visible:scale-[102%]"
                                        >
                                            {t("events.buttons.join")}
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            disabled
                                            className="mt-4 block w-full rounded-lg p-2 text-center font-display bg-surface text-text-titles opacity-60"
                                        >
                                            {t("events.buttons.soon")}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>

        </section>
    )
}
