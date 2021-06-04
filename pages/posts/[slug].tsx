import RichText from "../../components/Contentful/RichText";
import { PostContentType } from "../../lib/api/contentful/interface";
import { DynamicPageParams, ServerSideProps } from "../../lib/api/Interface";
import api from "../../lib/api/client";

interface PostPageProps {
    post: PostContentType;
}

export default function Post({ post } : PostPageProps) {
    console.log(post);
    return (
        <div className="content-wrapper">
            <article>
                <h1>{post.title}</h1>
                <div>{post.date}</div>
                {post.coverImage && <img src={post.coverImage.url} alt={post.coverImage.title} />}
                <RichText {...post.content.json}/>
            </article>
        </div>
    )
}


export async function getServerSideProps({ params, preview = false }: DynamicPageParams): Promise<ServerSideProps<PostPageProps>> {
    const post = await api.getPosts({
        where: `{ slug: "${params.slug}" }`,
        limit: 1,
        preview
    });
    return {
        props: {
            post: post.postCollection.items[0]
        }
    };
}
