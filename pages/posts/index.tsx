import Posts, { PostsProps } from "../../components/Posts";
import api from "../../lib/api/client";
import {MetadataProps} from "../../components/Metadata";
import {DynamicPageParams, ServerSideProps} from "../../lib/api/Interface";
import PageWrapper from "../../components/PageWrapper";
import {getPageFrontUrl} from "../../lib/utils/global";

const POSTS_SIZE = 1;

type IndexPageProps = {
    postsProps: PostsProps;
    metadata: MetadataProps;
}

function IndexPage(props: IndexPageProps) {
    return (
        <PageWrapper metadata={props.metadata} >
            <>
                <Posts {...props.postsProps}/>
            </>
        </PageWrapper>
    );
}

export async function getServerSideProps(context: DynamicPageParams): Promise<ServerSideProps<IndexPageProps>>  {
    const postsProps: PostsProps = await api.getPosts({
        skip: 0,
        limit: POSTS_SIZE,
        preview: false,
    }).then(postCollection => {
        return {
            postList: postCollection.postCollection.items,
            current: POSTS_SIZE,
            offset: 0,
            total: postCollection.postCollection.total,
            hasMore: postCollection.postCollection.total > (POSTS_SIZE)
        };
    });

    return {
        props: {
            postsProps: postsProps,
            metadata: {
                title: 'Posts',
                description: "List of latest blog post collections.",
                url: getPageFrontUrl(context)
            }
        }
    };
}

export default IndexPage;
