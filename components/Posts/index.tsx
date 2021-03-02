import { ReactElement, useEffect, useState } from "react"
import api from "../../lib/api/client";
import { PostContentType } from "../../lib/api/contentful/interface";
import PostCard from "../PostCard";
import "./Posts.scss";

const SIZE = 1;

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
