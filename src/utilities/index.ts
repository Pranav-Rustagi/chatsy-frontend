const generateUserNameFromEmail = (email: string) => {
    const parts = email.split('@');
    const formattedPrefix = parts[0].replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();

    const randomSuffix = Math.floor(Math.random() * 10000);
    const formattedSuffix = randomSuffix.toString().padStart(4, '0');
    const username = `${formattedPrefix}${formattedSuffix}`;
    return username;
}

const getHighQualityGoogleAvatar = (url: string) => {
    return url.replace("s96-c", "s200-c");
}

const getLastMessageTimeString = (date: Date) => {
    const today = new Date();
    if (date.toDateString() === today.toDateString()) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
    }

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }

    if (date.getFullYear() === today.getFullYear()) {
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
    
    return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
}

export {
    generateUserNameFromEmail,
    getHighQualityGoogleAvatar,
    getLastMessageTimeString
}