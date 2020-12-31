import { CollectionParams, PostCollection } from "../api/contentful/interface";

export interface Api {
    getPosts(query: CollectionParams): Promise<PostCollection>
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