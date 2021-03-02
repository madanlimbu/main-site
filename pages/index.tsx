import Head from "next/head";
import Posts from "../components/Posts";
import { RoutesCollection } from "../lib/api/contentful/interface";
import queryRoutes from "../lib/api/contentful/routes";

export type IndexPageProps = {
    routes: RoutesCollection;
}

function IndexPage(props: IndexPageProps) {
    const { routes } = props;

    return (
        <>
        {/* <Head>
            <title>Mainer</title>
        </Head> */}
        <Posts/>
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
    return {
         props: {
             routes: routes,
         }
    };
}

export default IndexPage;