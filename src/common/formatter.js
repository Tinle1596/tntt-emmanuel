// YYYY-MM-DD
export function convertUnixDate(timestamp) {
    let date = new Date(timestamp * 1000);
    return date.toISOString().split('T')[0];
}

