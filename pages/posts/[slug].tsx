import RichText from "../../components/Contentful/RichText";
import { PostContentType } from "../../lib/api/contentful/interface";
import { getPosts } from "../../lib/api/contentful/posts";
import { DynamicPageParams, ServerSideProps } from "../../lib/api/Interface";

interface PostPageProps {
    post: PostContentType;
}

export default function Post({ post } : PostPageProps) {
    return (
        <div>
            <h1>{post.title}</h1>
            {post.coverImage && <img src={post.coverImage.url} alt={post.coverImage.title} />}
            <RichText {...post.content.json}/>
        </div>
    )
}


export async function getServerSideProps({ params, preview = false }: DynamicPageParams): Promise<ServerSideProps<PostPageProps>> {
    const post = await getPosts({
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
