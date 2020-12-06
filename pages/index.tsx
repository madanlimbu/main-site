import Head from 'next/head';

export async function getStaticProps() {
    return { props: { name: 'madan' } }
}

function IndexPage({ name }) {
    return (
        <>
        <Head>
        <meta property="og:title" content="My page title" key="title" />
        <title>Testing Head component</title>    
        <script data-ad-client="ca-pub-7420131458491934" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        {name}
            <div>Test home page.</div>
        </>);
}

export default IndexPage