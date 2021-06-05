export function getFormattedDate(publishedDate: string): string {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(publishedDate);
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}