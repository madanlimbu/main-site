import Head from 'next/head';
import showdown from 'showdown';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Console } from 'console';

const user = 'madanlimbu';
const repo = 'gitbook';
const branch = 'master';
const pageToUrl = (pageName: string) => {
    return `https://raw.githubusercontent.com/${user}/${repo}/${branch}${pageName}`;
}

export async function getStaticProps() {
    const summaryData = await fetch(pageToUrl('/SUMMARY.md'));
    const summary = await summaryData.text();

    return { props: { name: 'madan', summary } }
}

function IndexPage({ name, summary }): ReactElement {
    const [page, setPage] = useState('');
    const [menu, setMenu] = useState('');
    const [isTemp, setIsTemp] = useState(false);
    const [baseUrl, setBaseUrl] = useState('');

    showdown.setFlavor('github');
    const show = new showdown.Converter();

    const router = useRouter();
    const path = router.asPath === '/' ? '/README.md' : router.asPath;

    const updatePage = async (path) => {
        const res = await fetch(pageToUrl(path));
        const pageText = await res.text();
        
        const pageHtml = show.makeHtml(pageText);
        setPage(pageHtml);
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            // Todo: Update showdown to add slash "/" infront of hrefs.
            setBaseUrl(window.location.origin);
            const tempUrlArray = [
                '/README.md',
                '/learn/README.md',
                '/random/README.md'
            ];
            console.log(`path`, window.location.pathname)
            console.log(`is temp ?`, tempUrlArray.includes(window.location.pathname));
            if (tempUrlArray.includes(window.location.pathname)) {
                setIsTemp(true);
            }
        }
    }, []);

    useEffect(() => {
        // const menuText = show.makeHtml(summary);
        // const dom = new DOMParser().parseFromString(menuText, 'text/html');
        // console.log(dom.querySelector('body>ul'));
        // const menus = dom.querySelector('body>ul');
        // console.log(menus);
        // function allDescendants (node, callback) {
        //     for (var i = 0; i < node.children.length; i++) {
        //       var child = node.children[i];
        //       allDescendants(child, callback);
        //       callback(child);
        //     }
        // }
        // allDescendants(menus, (c) => {
        //     console.log(c);
        // });

        setMenu(show.makeHtml(summary))
    }, [summary]);

    useEffect(() => {
        updatePage(path);
    }, []);


    return (
        <>
        <Head>
        <meta property="og:title" content="Learn" key="title" />
        <base href={baseUrl} />
        <script data-ad-client="ca-pub-7420131458491934" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <header className="header">
            <nav className="nav" dangerouslySetInnerHTML={{ __html: menu}} />
        </header>
        <div className="main">
            {isTemp ? <div className="tree" dangerouslySetInnerHTML={{ __html: menu}} /> : 
            <div className="content" dangerouslySetInnerHTML={{ __html: page}} />}
        </div>
        </>
        );
}

export default IndexPage;