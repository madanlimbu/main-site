import { PostContentType } from "../../lib/api/contentful/interface";
import "./PostCard.scss";
import {getFormattedDate} from "../../lib/utils/global";

export default function Index(summary: PostContentType) {
    const formattedDate = getFormattedDate(summary.date);
    return (
        <a className="post-card" href={`/posts/${summary.slug}`}>
            <div className="post-card__date">{formattedDate}</div>
            <h5 className="post-card__title">{summary.title}</h5>
            <div className="post-card__summary">{summary.excerpt}</div>
        </a>
    )
}
