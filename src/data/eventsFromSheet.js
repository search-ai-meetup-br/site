const EVENTS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWzLftuTqUKHQDELYkQnSkHP-UZeNJP-rSMjfcA5M88TV79e80pjZFGpPRkx0V8YDz0mm6q_Fh7Gae/pub?gid=0&single=true&output=csv"

const REQUIRED_FIELDS = ["id", "startsAt"];

const extractDriveInfo = (value) => {
    const pathMatch = value.match(/\/file\/d\/([^/]+)\//i);
    const resourceKeyMatch = value.match(/[?&]resourcekey=([^&]+)/i);

    if (pathMatch) {
        return {
            id: pathMatch[1],
            resourceKey: resourceKeyMatch ? resourceKeyMatch[1] : "",
        };
    }

    try {
        const url = new URL(value);
        return {
            id: url.searchParams.get("id") || "",
            resourceKey: url.searchParams.get("resourcekey") || "",
        };
    } catch (error) {
        return { id: "", resourceKey: "" };
    }
};

const normalizeDriveUrl = (value) => {
    if (!value) {
        return "";
    }

    const trimmed = value.trim();
    if (!trimmed.includes("drive.google.com")) {
        return trimmed;
    }

    const { id, resourceKey } = extractDriveInfo(trimmed);
    if (!id) {
        return trimmed;
    }

    const resourceKeyParam = resourceKey ? `?resourcekey=${resourceKey}` : "";
    return `https://lh3.googleusercontent.com/d/${id}${resourceKeyParam}`;
};

const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];

        if (inQuotes) {
            if (char === '"') {
                if (text[i + 1] === '"') {
                    field += '"';
                    i += 1;
                } else {
                    inQuotes = false;
                }
            } else {
                field += char;
            }
            continue;
        }

        if (char === '"') {
            inQuotes = true;
            continue;
        }

        if (char === ",") {
            row.push(field);
            field = "";
            continue;
        }

        if (char === "\n") {
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            continue;
        }

        if (char === "\r") {
            continue;
        }

        field += char;
    }

    row.push(field);
    rows.push(row);

    return rows;
};

const buildEvents = (rows) => {
    if (!rows.length) {
        return [];
    }

    const header = rows[0].map((value) => value.trim());

    return rows.slice(1)
        .map((row) => {
            const event = {};
            header.forEach((key, index) => {
                event[key] = (row[index] ?? "").trim();
            });
            return event;
        })
        .filter((event) => REQUIRED_FIELDS.every((field) => event[field]))
        .map((event) => ({
            id: event.id,
            startsAt: event.startsAt,
            titlePT: event.titlePT,
            titleEN: event.titleEN,
            local: event.local,
            link: event.link,
            bannerDesktopUrl: normalizeDriveUrl(event.bannerDesktopUrl),
            bannerMobileUrl: normalizeDriveUrl(event.bannerMobileUrl),
        }));
};

export const fetchEventsFromSheet = async () => {
    const response = await fetch(EVENTS_SHEET_URL);
    if (!response.ok) {
        throw new Error("Failed to load events from sheet.");
    }

    const text = await response.text();
    const rows = parseCsv(text);
    return buildEvents(rows);
};
