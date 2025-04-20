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

export {
    generateUserNameFromEmail,
    getHighQualityGoogleAvatar
}