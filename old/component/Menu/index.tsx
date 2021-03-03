import { ReactElement } from "react";
import { RouteProps } from "../../../lib/api/Interface";

// export type RouteProps = {
//     title: string;
//     path?: string;
//     routes?: RouteProps[];
// }

export type GenerateMenuTreeProps = {
    routes: RouteProps[];
    branch: (route: RouteProps) => ReactElement;
    leaf: (route: RouteProps) => ReactElement;
}

export function GenerateMenuTree({ routes, leaf, branch }: GenerateMenuTreeProps): ReactElement{
    const getRoute = (routes: RouteProps[]) => {
        return routes.map(route => {
                if (route.routes) {
                    return (branch(route));
                }
                return (leaf(route));
                }
            )
    };
    return (<>{getRoute(routes)}</>);
}

export function Menu({ routes }: RouteProps): ReactElement {
    const leaf = (route: RouteProps): ReactElement => {
         return <li key={route.title} className="xtra" ><span>{route.title}</span></li>;
    }

    const branch = (route: RouteProps): ReactElement => {
        return (
            <li key={route.title} >
                <span>{route.title}</span>
                <ul>
                    <GenerateMenuTree routes={route.routes} branch={branch} leaf={leaf}/>
                </ul>
            </li>
            );
    }

    return(
        <ul>
            <GenerateMenuTree routes={routes} branch={branch} leaf={leaf} />
        </ul>
    )
}
