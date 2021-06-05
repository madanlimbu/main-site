import { PostContentType } from "../../lib/api/contentful/interface";
import RichText from "../Contentful/RichText";
import { ReactElement } from "react";
import {getFormattedDate} from "../../lib/utils/global";
import "./PostsPage.scss";

export default function PostsPage(post: PostContentType): ReactElement {
    const formattedDate = getFormattedDate(post.date);
    return (
        <article className="posts-page">
            <h1 className="posts-page__title">{post.title}</h1>
            <div className="posts-page__published-date">{formattedDate}</div>
            {post.coverImage && <div className="posts-page__header-image">
                <img src={post.coverImage.url} alt={post.coverImage.title} />
            </div>}
            <div className="posts-page__body">
                <RichText {...post.content}/>
            </div>
        </article>
    )
}