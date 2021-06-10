import {DynamicPageParams, ServerSideProps} from "../../lib/api/Interface";
import { GithubMarkdown } from "../../components/GithubMarkdown";
import {getGithubPage, getGithubPageRoutes} from "../../lib/api/github/utils";
import {RouteProps} from "../../components/Menu";
import MenuTreeSideBar from "../../components/MenuTreeSideBar";
import PageWrapper from "../../components/PageWrapper";
import {MetadataProps} from "../../components/Metadata";
import {getPageFrontUrl, stripSpecialCharacters} from "../../lib/utils/global";

interface DocsSingle {
    type: "single"
    body: string;
    metadata: MetadataProps;
}

interface DocsListing {
    type: "listing";
    githubRoutes: RouteProps;
    metadata: MetadataProps;
}

type DocsProps = DocsSingle | DocsListing;

export default function Docs(docs : DocsProps) {
    return (
        <PageWrapper metadata={docs.metadata}>
            <>
                {docs.type == "single" && <GithubMarkdown {...{markdown: docs.body}}/>}
                {docs.type == "listing" && <MenuTreeSideBar {...docs.githubRoutes} />}
            </>
        </PageWrapper>
    )
}

export async function getServerSideProps(context: DynamicPageParams): Promise<ServerSideProps<DocsProps>> {
    if (context.params.slug) {
        const path = context.params.slug.join('/');
        const githubMarkdown = await getGithubPage(path);
        return {
            props: {
                type: "single",
                body: githubMarkdown.html,
                metadata: {
                    title: path.split('/').pop(),
                    description: stripSpecialCharacters(githubMarkdown.plain).slice(0, 200),
                    url: getPageFrontUrl(context)
                }
            }
        };
    } else {
        const githubRoutes = await getGithubPageRoutes();
        return {
            props: {
                type: "listing",
                githubRoutes,
                metadata: {
                    title: 'Docs Listing',
                    description: 'List of personal docs for specific tech topic.',
                    url: getPageFrontUrl(context)
                }
            }
        };
    }
}