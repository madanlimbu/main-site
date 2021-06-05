import Posts, { PostsProps } from "../components/Posts";
import { RoutesCollection } from "../lib/api/contentful/interface";
import queryRoutes from "../lib/api/contentful/routes";
import api from "../lib/api/client";
import Navigation from "../components/Navigation";
import { RouteProps } from "../components/Menu";
import { MenuTreeSideBar } from "../old/component/MenuTreeSideBar";

const POSTS_SIZE = 1;

type IndexPageProps = {
    routes: RoutesCollection;
    postsProps: PostsProps;
}

function IndexPage(props: IndexPageProps) {
    const { routes } = props;
    const menuProps: RouteProps = {
        title: 'title',
        routes: [
            {
                "title": "madan",
                "routes": [
                    {
                        "title": "Home",
                        "path": "/"
                    },
                    {
                        "title": "Web",
                        "routes": [
                            {
                                "title": "Web Api",
                                "path": "/learn/web-stuff/web-api"
                            },
                            {
                                "title": "Cookie",
                                "path": "/learn/web-stuff/cookie"
                            },
                            {
                                "title": "OAuth 2.0",
                                "path": "/random/oauth-2.0"
                            }
                        ]
                    },
                    {
                        "title": "React",
                        "path": "/learn/web-stuff/react/README",
                        "routes": [
                            {
                                "title": "React Hooks",
                                "path": "/learn/web-stuff/react/hooks"
                            }
                        ]
                    },
                    {
                        "title": "Drupal",
                        "routes": [
                            {
                                "title": "Drupal 8",
                                "routes": [
                                    {
                                        "title": "Drupal 8 Composer scaffolding",
                                        "path": "/learn/drupal/drupal-php-thangs"
                                    },
                                    {
                                        "title": "Permissions",
                                        "path": "/learn/drupal/drupal-8/permissions"
                                    },
                                    {
                                        "title": "Data system",
                                        "path": "/learn/drupal/drupal-8/type-of-data-storage"
                                    }
                                ]
                            },
                            {
                                "title": "Drupal 7",
                                "routes": [
                                    {
                                        "title": "Custom Field Widget",
                                        "path": "/learn/drupal/drupal-7/custom-field-widget"
                                    },
                                    {
                                        "title": "Custom Drush Command",
                                        "path": "/learn/drupal/drupal-7/drush-command"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Python & Django",
                        "routes": [
                            {
                                "title": "Intro to Pythonism",
                                "path": "/learn/python-django/pythonism"
                            },
                            {
                                "title": "Django",
                                "routes": [
                                    {
                                        "title": "Django Overview",
                                        "path": "/learn/python-django/untitled/overview"
                                    },
                                    {
                                        "title": "Tools",
                                        "path": "/learn/python-django/untitled/tools"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return (
        <>
            {/* <Head>
                <title>Mainer</title>
            </Head> */}
            <Navigation />
            <MenuTreeSideBar {...menuProps} />
            <div className="content-wrapper">
                <Posts {...props.postsProps}/>
            </div>
            {/* {*/}
            {/*routes*/}
            {/*.routesCollection*/}
            {/*.items*/}
            {/*.find(menu => menu.name === 'Menus')*/}
            {/*.routes*/}
            {/*.routes*/}
            {/*.map(route => <div className="main-menu" key={route.title} >{route.title}</div>)*/}
            {/*}*/}
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
