import { ReactElement, useEffect, useState } from "react"
import api from "../../lib/api/client";
import { PostContentType } from "../../lib/api/contentful/interface";
import "./Posts.scss";

const SIZE = 1;

function PostCard(summary: PostContentType) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(summary.date);
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    return (
        <a className="post__card" href={`/posts/${summary.slug}`}>
            <div>{formattedDate}</div>
            <h5>{summary.title}</h5>
            <div>{summary.excerpt}</div>
        </a>
    )
}

export default function Posts(): ReactElement {
    const [postList, setPostList] = useState<PostContentType[]>([]);
    const [current, setCurrent] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const fetchMore = () => {
        setOffset(value => total > (SIZE + value) ? (value + SIZE) : total - (value + SIZE));
    }

    useEffect(() => {
        api.getPosts({
            skip: offset,
            limit: SIZE,
            preview: false,
        }).then(postCollection => {
            setPostList((currentPostList) => [...currentPostList, ...postCollection.postCollection.items]);
            setTotal(postCollection.postCollection.total);
            setCurrent(offset + SIZE);
            setHasMore(postCollection.postCollection.total > (current + SIZE));
        });
    }, [offset]);

    return (
        <div className="posts">
            <h2>Latest posts</h2>
            <ul>
                {postList.map(post => (
                    <li key={encodeURIComponent(post.title)} >
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>
            {hasMore && <button onClick={(e) => {
                e.preventDefault();
                fetchMore();
            }} >Load more</button>}
        </div>
    )
}
