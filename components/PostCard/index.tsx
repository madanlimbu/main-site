import { PostContentType } from "../../lib/api/contentful/interface";
import "./PostCard.scss";

export default function Index(summary: PostContentType) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(summary.date);
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    return (
        <a className="post-card" href={`/posts/${summary.slug}`}>
            <div className="post-card__date">{formattedDate}</div>
            <h5 className="post-card__title">{summary.title}</h5>
            <div className="post-card__summary">{summary.excerpt}</div>
        </a>
    )
}
