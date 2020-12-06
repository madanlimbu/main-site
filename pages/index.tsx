import Head from 'next/head';
import showdown from 'showdown';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

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
        }
    }, []);

    useEffect(() => {
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
            <div dangerouslySetInnerHTML={{ __html: menu}} />
            <div dangerouslySetInnerHTML={{ __html: page}} />
        </>
        );
}

export default IndexPage;