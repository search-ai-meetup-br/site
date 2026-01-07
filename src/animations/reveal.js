// Hero
export const titleContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
        },
    },
};

export const titleWord = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const heroIntro = {
    hidden: {},
    show: {
        transition: {
            delayChildren: .5,
            staggerChildren: 0.12,
        },
    },
};

export const fadeUpSoft = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};