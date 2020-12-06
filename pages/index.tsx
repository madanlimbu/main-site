import Head from 'next/head';
import showdown from 'showdown';
import { LegacyRef, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { Console } from 'console';
import Header from '../component/Header';
import { MenuTreeSideBar } from '../component/MenuTreeSideBar';
import hljs from 'highlight.js';
import { RouteProps } from '../component/Menu';

const routes: RouteProps = {
    title: 'madan',
    routes: [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Web',
            path: '/learn/web-stuff/README',
            routes: [
                {
                    title: 'Web Api',
                    path: '/learn/web-stuff/web-api'
                },
                {
                    title: 'Cookie',
                    path: '/learn/web-stuff/cookie'
                },
                {
                    title: 'OAuth 2.0',
                    path: '/random/oauth-2.0'
                }
            ]
        },
        {
            title: 'React',
            path: '/learn/web-stuff/react/README',
            routes: [
                {
                    title: 'React Hooks',
                    path: '/learn/web-stuff/react/hooks'
                }
            ]
        },
        {
            title: 'Drupal',
            routes: [
                {
                    title: 'Drupal 8',
                    routes: [
                        {
                            title: 'Drupal 8 Composer scaffolding',
                            path: '/learn/drupal/drupal-php-thangs'
                        },
                        {
                            title: 'Permissions',
                            path: '/learn/drupal/drupal-8/permissions'
                        },
                        {
                            title: 'Data system',
                            path: '/learn/drupal/drupal-8/type-of-data-storage'
                        },
                    ]
                },
                {
                    title: 'Drupal 7',
                    routes: [
                        {
                            title: 'Custom Field Widget',
                            path: '/learn/drupal/drupal-7/custom-field-widget'
                        },
                        {
                            title: 'Custom Drush Command',
                            path: '/learn/drupal/drupal-7/drush-command'
                        },
                    ]
                }
            ]
        },
        {
            title: 'Python & Django',
            routes: [
                {
                    title: 'Intro to Pythonism',
                    path: '/learn/python-django/pythonism'
                },
                {
                    title: 'Django',
                    routes: [
                        {
                            title: 'Django Overview',
                            path: '/learn/python-django/untitled/overview'
                        },
                        {
                            title: 'Tools',
                            path: '/learn/python-django/untitled/tools'
                        }
                    ]
                }
            ]
        },

    ]
};

const user = 'madanlimbu';
const repo = 'gitbook';
const branch = 'master';
const pageToUrl = (pageName: string) => {
    return `https://raw.githubusercontent.com/${user}/${repo}/${branch}${pageName}.md`;
}

export async function getStaticProps() {
    const summaryData = await fetch(pageToUrl('/SUMMARY'));
    const summary = await summaryData.text();

    return { props: { name: 'madan', summary } }
}

function IndexPage({ name, summary }): ReactElement {
    const [page, setPage] = useState('');
    const [menu, setMenu] = useState('');
    const [isTemp, setIsTemp] = useState(false);
    const [baseUrl, setBaseUrl] = useState('');
    const [isHome, setIsHome] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    showdown.setFlavor('github');
    const show = new showdown.Converter();

    const router = useRouter();
    const path = router.asPath;

    const updatePage = async (path) => {
        if (path === '/') {
            setIsHome(true);
        } else {
            const res = await fetch(pageToUrl(path));
            const pageText = await res.text();
            
            const pageHtml = show.makeHtml(pageText);
            setPage(pageHtml);
        }
    }
    
    useEffect(() => {
        if (ref.current) {
            const codeNodesList = ref.current.querySelectorAll('pre');
            codeNodesList.forEach(node => {
                hljs.highlightBlock(node);
            });
        }
    });

    useEffect(() => {
        if (typeof window !== undefined) {
            // Todo: Update showdown to add slash "/" infront of hrefs.
            setBaseUrl(window.location.origin);
            const tempUrlArray = [
                '/README',
                '/learn/README',
                '/random/README'
            ];
            if (tempUrlArray.includes(window.location.pathname)) {
                setIsTemp(true);
            }
        }
    }, []);

    useEffect(() => {
        setMenu(show.makeHtml(summary))
    }, [summary]);

    useEffect(() => {
        updatePage(path);
        setIsHome(path === '/');
    }, [path]);

    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Learn" key="title" />
            <base href={baseUrl} />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css" />            <script data-ad-client="ca-pub-7420131458491934" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <div className={`container ${isHome ? `container-full` : ``}`}>
            {/* <nav dangerouslySetInnerHTML={{ __html: menu}} /> */}
            <aside><MenuTreeSideBar {...routes} /></aside>
            <main>
                {isTemp ? <div className="tree" dangerouslySetInnerHTML={{ __html: menu}} /> : 
                <div ref={ref} className="content" dangerouslySetInnerHTML={{ __html: page}} />}
            </main>
        </div>
        </>
        );
}

export default IndexPage;