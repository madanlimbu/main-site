import { PostContentType } from "../../lib/api/contentful/interface";
import { DynamicPageParams, ServerSideProps } from "../../lib/api/Interface";
import api from "../../lib/api/client";
import PostsPage from "../../components/PostsPage";
import {MetadataProps} from "../../components/Metadata";
import PageWrapper from "../../components/PageWrapper";
import {getPageFrontUrl} from "../../lib/utils/global";

interface PostPageProps {
    post: PostContentType;
    metadata: MetadataProps;
}

export default function Post({ post, metadata } : PostPageProps) {
    return (
        <PageWrapper metadata={metadata}>
            <PostsPage {...post} />
        </PageWrapper>
    )
}


export async function getServerSideProps(context : DynamicPageParams): Promise<ServerSideProps<PostPageProps>> {
    const postList = await api.getPosts({
        where: `{ slug: "${context.params.slug}" }`,
        limit: 1,
        preview: false
    });
    const post = postList.postCollection.items[0];
    return {
        props: {
            post,
            metadata: {
                title: post.title,
                description: post.excerpt,
                url: getPageFrontUrl(context)
            }
        }
    };
}
