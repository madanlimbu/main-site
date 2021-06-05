import {ReactElement, useEffect, useState} from "react";
import { useRouter } from "next/router";
import "./Navigation.scss";
import {ThemeToggle} from "../ThemeToggle";


export default function Navigation(): ReactElement {
    const router = useRouter();
    const activeUrl = (path: string):string => router.asPath === path ? 'active' : '';

    return (
        <div className="navigation">
            <div className="content-wrapper">
                <header>
                    <div className="navigation__left">
                        <a href="/" title="Home" className={`navigation__home ${activeUrl('/')}`}>
                            <span>Madan</span>
                        </a>
                    </div>
                    <div className="navigation__centre">
                        <ThemeToggle />
                    </div>
                    <div className="navigation__right">
                        <a href="/about" className={activeUrl('/about')}>
                            <span>ABOUT</span>
                         </a>
                    </div>
                </header>
            </div>
        </div>
    );
}