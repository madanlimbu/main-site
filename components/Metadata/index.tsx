import Head from 'next/head';

export interface MetadataProps {
    title: string;
    description: string;
    url: string;
    image?: string;
}

const DEFAULT_FABICON = 'https://avatars2.githubusercontent.com/u/12434457?s=460&u=d33f17b31e3dd616e415c3f928e952f8ccc3bb9b&v=4';

export default function Metadata(data: MetadataProps) {
    return (
        <Head>
            <link rel="shortcut icon" type="image/x-icon" href={DEFAULT_FABICON} />
            <link rel="canonical" href={data.url} />

            <meta http-equiv="Content-Type" content="text/html; charSet=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:site_name" content="Madan Tech" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:URL" content={data.url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={data.image ? data.image : DEFAULT_FABICON} />

            <title>{data.title}</title>
        </Head>
    )
}