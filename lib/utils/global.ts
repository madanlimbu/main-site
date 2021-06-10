import {DynamicPageParams} from "../api/Interface";

export function getFormattedDate(publishedDate: string): string {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(publishedDate);
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export const stripSpecialCharacters = (text: string) => text.replace(/[^a-zA-Z ]/g, "");

export const getPageFrontUrl = ({ req }: DynamicPageParams) => `https://${req.headers.host}${req.url}`;