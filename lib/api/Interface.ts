export interface Api {
    getPosts: <T, F>(q: T) => Promise<F>,
}

export interface ServiceRequest {
    service: string,
    args?: unknown
}

export interface ServerSideProps<T> {
    props: T
}

export interface DynamicPageParams {
    params: {
        slug: string;
    };
    preview: boolean;
}

export type RouteProps = {
    title: string;
    path?: string;
    routes?: RouteProps[];
}
