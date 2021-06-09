import { Router, useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { GenerateMenuTree } from "../Menu";
import { RouteProps } from "../../lib/api/Interface";
import "./Menu.scss";

export default function MenuTreeSideBar({ routes }: RouteProps): ReactElement {
    const router = useRouter();

    const leaf = (route: RouteProps): ReactElement => {
         return <li key={`leaf-${route.title}`} onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             router.push(route.path);
         }}>
             <a href={route.path} >
                <span className="tree_label" >{route.title}</span>
             </a>
            </li>;
    }

    const branch = (route: RouteProps): ReactElement => {
        const router = useRouter();
        const path = router.asPath;
        const [isHome, setIsHome] = useState(false);

        useEffect(() => {
            setIsHome(router.asPath === '/');
        }, [path]);
        
        const [checked, setChecked] = useState(false);
        return (
            <li key={`branch-${route.title}`} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setChecked(!checked)
            }} >
                <input type="checkbox" checked={isHome ? isHome : checked} id={route.title} onChange={(e) => {
                    e.preventDefault();
                    if (route.path) {
                        e.preventDefault();
                        e.stopPropagation();
                        setChecked(!checked);
                        // if (path === route.path) {
                        //     setChecked(!checked);
                        // } else {
                        //     setChecked(false);
                        //     // router.push(route.path);
                        // }
                        // router.push(route.path);
                    }
                }} />
                <label onClick={(e) => { 
                    if (route.path) {
                        e.preventDefault();
                        e.stopPropagation();
                        setChecked(!checked);
                        // if (path === route.path) {
                        //     setChecked(!checked);
                        // } else {
                        //     setChecked(false);
                        //     // router.push(route.path);
                        // }
                    }
                    
                    console.log(e); 
                    }} className="tree_label" htmlFor={route.title}>{route.title}</label>
                <ul>
                    {leaf(route)}
                    <GenerateMenuTree routes={route.routes} branch={branch} leaf={leaf}/>
                </ul>
            </li>
            );
    };

    return(
        <ul className="tree">
            <GenerateMenuTree routes={routes} branch={branch} leaf={leaf} />
        </ul>
    )
}
