import { RouteProps } from "../components/Menu";
import { getMenus } from '../lib/apits';

export type IndexPageProps = {
    // menuTree?: RouteProps;
    m: {}
}

function IndexPage({ m }: IndexPageProps) {
    console.log(`m`, m);
    return (
        <>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const menus = (await getMenus() ?? []);
    debugger;
    console.log(`menus`, menus);
    return {
         props: { m: menus }
    }
}

export default IndexPage;