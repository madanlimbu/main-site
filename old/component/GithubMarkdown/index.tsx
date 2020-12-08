import { ReactElement } from "react";
import showdown from 'showdown';
import 'GithubMarkdown.module.css';

export default function GithubMarkdown(githubMarkdown: string): ReactElement {
    showdown.setFlavor('github');
    const show = new showdown.Converter();
    const html = show.makeHtml(githubMarkdown); 
    return (
        <div dangerouslySetInnerHTML={{ __html: html}} />
    );
}