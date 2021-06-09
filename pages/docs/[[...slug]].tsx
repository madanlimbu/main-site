import Navigation from "../../components/Navigation";
import { ServerSideProps } from "../../lib/api/Interface";
import { GithubMarkdown, GithubMarkdownProps} from "../../components/GithubMarkdown";
import {getGithubPage, getGithubPageRoutes} from "../../lib/api/github/utils";
import {RouteProps} from "../../components/Menu";
import MenuTreeSideBar from "../../components/MenuTreeSideBar";

interface DocsSingle {
    type: "single"
    body: string;
}

interface DocsListing {
    type: "listing";
    githubRoutes: RouteProps;
}

type DocsProps = DocsSingle | DocsListing;

export default function Docs(docs : DocsProps) {
    // const gitMarkdown: GithubMarkdownProps = {
    //     markdown: docs.body
    // };

    return (
        <>
            <Navigation/>
            <div className="content-wrapper">
                {docs.type == "single" &&
                <GithubMarkdown {...{markdown: docs.body}}/>}
                {docs.type == "listing" &&
                <MenuTreeSideBar {...docs.githubRoutes} />
                }
            </div>
        </>
    )
}

export async function getServerSideProps(context): Promise<ServerSideProps<DocsProps>> {
    if (context.params.slug) {
        const path = context.params.slug.join('/');
        const githubMarkdown = await getGithubPage(path);
        return {
            props: {
                type: "single",
                body: githubMarkdown
            }
        };
    } else {
        const githubRoutes = await getGithubPageRoutes();
        return {
            props: {
                type: "listing",
                githubRoutes
            }
        };
    }
}