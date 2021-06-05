import { ReactElement, useEffect, useRef } from "react";
import showdown from 'showdown';
import hljs from "highlight.js";
import 'highlight.js/scss/github.scss';

const USER = 'madanlimbu';
const REPO = 'gitbook';
const BRANCH = 'master';
const MARKDOWN_TYPE = 'github';

export const pageToGithubUrl = (pageName: string): string => {
    return `https://raw.githubusercontent.com/${USER}/${REPO}/${BRANCH}/${pageName}.md`;
};

export async function getGithubPage(path: string): Promise<string> {
    const githubPageUrl = await fetch(pageToGithubUrl(path));
    const markdown = await githubPageUrl.text();
    showdown.setFlavor(MARKDOWN_TYPE);
    const showdownConverter = new showdown.Converter();
    return showdownConverter.makeHtml(markdown);
}

export interface GithubMarkdownProps {
    markdown: string;
}
export function GithubMarkdown({ markdown } : GithubMarkdownProps): ReactElement {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const codeNodeList = ref.current.querySelectorAll('pre');
            codeNodeList.forEach(node => {
                hljs.highlightBlock(node);
            })
        }
    });

    return (
        <div ref={ref} dangerouslySetInnerHTML={{ __html: markdown}} />
    );
}