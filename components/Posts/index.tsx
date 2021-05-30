import { ReactElement, useEffect, useState, useRef } from "react"
import api from "../../lib/api/client";
import { PostContentType } from "../../lib/api/contentful/interface";
import PostCard from "../PostCard";
import "./Posts.scss";

const SIZE = 1;

export type PostsProps = {
    postList: PostContentType[];
    current: number;
    offset: number;
    total: number;
    hasMore: boolean;
}

export default function Posts(props: PostsProps): ReactElement {
    const [postList, setPostList] = useState<PostContentType[]>(props.postList);
    const [current, setCurrent] = useState<number>(props.current);
    const [offset, setOffset] = useState<number>(props.offset);
    const [total, setTotal] = useState<number>(props.total);
    const [hasMore, setHasMore] = useState<boolean>(props.hasMore);
    const notInitialRender = useRef(false);

    useEffect(() => {
        console.log(`Post props`, props);
    }, []);

    const fetchMore = () => {
        setOffset(value => total > (SIZE + value) ? (value + SIZE) : total - (value + SIZE));
    }

    useEffect(() => {
        if (notInitialRender.current) {
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
        } else {
            notInitialRender.current = true;
        }
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
