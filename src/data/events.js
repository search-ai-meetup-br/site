import ImgEvent from "../assets/images/events/event.png";
import Img2101 from "../assets/images/events/21-01.png"

export const EVENT_STATUS = {
    DRAFT: "draft",
    PUBLISHED: "published",
    PAST: "past",
};

export const events = [
    {
        id: "jan-2026",
        img: Img2101,
        title: "events.cards.jan.title",
        dateTime: "21/01/2026 19:00 (BRT)",
        local: "Online",
        link: "https://www.meetup.com/search-ai-meetup-br/events/312506638/?eventOrigin=group_upcoming_events",
        status: EVENT_STATUS.PUBLISHED,
    },
    {
        id: "mar-2026",
        img: ImgEvent,
        title: "events.cards.mar.title",
        dateTime: "25/03/2026 18:30 (BRT)",
        local: "Online",
        link: "",
        status: EVENT_STATUS.DRAFT,
    },
    {
        id: "apr-2026",
        img: ImgEvent,
        title: "events.cards.apr.title",
        dateTime: "27/05/2026 18:30 (BRT)",
        local: "",
        link: "",
        status: EVENT_STATUS.DRAFT,
    },
    {
        id: "jul-2026",
        img: ImgEvent,
        title: "events.cards.jul.title",
        dateTime: "29/07/2026 18:30 (BRT)",
        local: "",
        link: "",
        status: EVENT_STATUS.DRAFT,
    },
    {
        id: "sep-2026",
        img: ImgEvent,
        title: "events.cards.sep.title",
        dateTime: "20/09/2026 18:30 (BRT)",
        local: "",
        link: "",
        status: EVENT_STATUS.DRAFT,
    },
     {
        id: "nov-2026",
        img: ImgEvent,
        title: "events.cards.nov.title (BRT)",
        dateTime: "25/11/2026 18:30",
        local: "",
        link: "",
        status: EVENT_STATUS.DRAFT,
    },
];
