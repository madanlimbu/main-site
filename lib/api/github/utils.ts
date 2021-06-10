import showdown from 'showdown';
import {RouteProps} from "../Interface";

const USER = 'madanlimbu';
const REPO = 'gitbook';
const BRANCH = 'master';
const MARKDOWN_TYPE = 'github';

const REGEX_FOR_ROUTE = /(\*(.*)\))/g; // anything between * and )   i.e * [Madan] (learn/test.md)
const REGEX_FOR_TITLE = /(\[(.*)\])/g; // anything between [ and ] i.e [Madan]
const REGEX_REMOVE_TITLE_BRACKET = /[\[\]]/g; //match any [, ]
const REGEX_FOR_URL = /(\(.*\))/g; // anything between ( and ) i.e (learn/something)
const REGEX_REMOVE_URL_BRAKCET = /(\.md)|[\(\)]/g; // match any (, ) or .md

export const pageToGithubUrl = (pageName: string): string => {
    return `https://raw.githubusercontent.com/${USER}/${REPO}/${BRANCH}/${pageName}.md`;
};

interface GithubPageProps {
    html: string;
    plain: string;
}

export async function getGithubPage(path: string): Promise<GithubPageProps> {
    const githubPageUrl = await fetch(pageToGithubUrl(path));
    const markdown = await githubPageUrl.text();
    showdown.setFlavor(MARKDOWN_TYPE);
    const showdownConverter = new showdown.Converter();
    return {
        html: showdownConverter.makeHtml(markdown),
        plain: markdown
    }
}

/**
 * Generate routes using github summary (Gitbook).
 *
 */
export async function getGithubPageRoutes(): Promise<RouteProps> {
    const MAIN_ROUTE_REPO = `https://raw.githubusercontent.com/${USER}/${REPO}/${BRANCH}/SUMMARY.md`;
    const plainRoutes = await fetch(MAIN_ROUTE_REPO);
    const plainRoutesText = await plainRoutes.text();

    const routes = plainRoutesText.match(REGEX_FOR_ROUTE);

    const mappedRoutes = routes.map(route => {
        const routeTitle = route.match(REGEX_FOR_TITLE)[0].replace(REGEX_REMOVE_TITLE_BRACKET,'');
        const routeUrl = route.match(REGEX_FOR_URL)[0].replace(REGEX_REMOVE_URL_BRAKCET, '');
        return {
            title: routeTitle,
            path: routeUrl
        };
    });

    const finalMappedRoutes = new Map<string, RouteProps>();
    const primaryMappedRoutes = new Map<string, RouteProps>();

    const isReadMe = (url) => url.split('/')[url.split('/').length - 1] === 'README';
    const generateDynamicPrimaryRoutes = (routes: { title: string, path: string }[]) => {
        const tempRoute: RouteProps[] = [];

        routes.forEach((route, index) => {
            if (isReadMe(route.path)) {
                primaryMappedRoutes.set(route.path.replace('/README', ''), route);
            }
        });
        return tempRoute;
    };

    generateDynamicPrimaryRoutes(mappedRoutes);

    primaryMappedRoutes.forEach((primaryRoute, primaryUrlWithoutFileName) => {
        if (primaryUrlWithoutFileName === 'README') {
        } else {
            const primaryPathLengthWithFileName = primaryUrlWithoutFileName.split('/').length + 1;
            const childRoutes = mappedRoutes.filter(route => {
                if (!isReadMe(route.path)) {
                    const currentRouteWithFileName = route.path.split('/').length;
                    if (currentRouteWithFileName === primaryPathLengthWithFileName) {
                        const routeWithouFileName = route.path.replace(`/${route.path.split('/').pop()}`, '');
                        if (routeWithouFileName == primaryUrlWithoutFileName) {
                            return true;
                        }
                    }
                }
                return false;
            });
            finalMappedRoutes.set(primaryUrlWithoutFileName, {...primaryRoute, routes: childRoutes.map(x => ({...x, path: `/docs/${x.path}`}))});
        }
    });

    const last = {
        title: 'madan',
        path: '/docs/README',
        routes: [...[...Array.from(finalMappedRoutes, ([key, value]) => value)].map((x) => ({...x, path: `/docs/${x.path}`}))]
    };
    console.log(`last`, last);
    return last;
}