import { ReactElement, useEffect, useRef } from "react";
import hljs from "highlight.js";
import 'highlight.js/scss/github.scss';

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