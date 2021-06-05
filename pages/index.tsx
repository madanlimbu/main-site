import Head from "next/head";
import Posts, { PostsProps } from "../components/Posts";
import { RoutesCollection } from "../lib/api/contentful/interface";
import queryRoutes from "../lib/api/contentful/routes";
import api from "../lib/api/client";
import Navigation from "../components/Navigation";

const POSTS_SIZE = 1;

type IndexPageProps = {
    routes: RoutesCollection;
    postsProps: PostsProps;
}

function IndexPage(props: IndexPageProps) {
    const { routes } = props;

    return (
        <>
            {/* <Head>
                <title>Mainer</title>
            </Head> */}
            <Navigation />
            <div className="content-wrapper">
                <Posts {...props.postsProps}/>
            </div>
            {/* {
            routes
            .routesCollection
            .items
            .find(menu => menu.name === 'Menus')
            .routes
            .routes
            .map(route => <div className="main-menu" key={route.title} >{route.title}</div>)
            } */}
        </>
    );
}

export async function getServerSideProps({ preview = false }) {
    const routes = (await queryRoutes({ preview: preview }) ?? {});
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
            routes: routes,
            postsProps: postsProps
        }
    };
}

export default IndexPage;
